import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { Platform } from 'react-native';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);

  // ✅ mesma lógica do LoginScreen (Android emulator vs iOS)
  const API_BASE =
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000/api'
      : 'http://localhost:3000/api';

  const login = useCallback((userData) => {
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  /**
   * ✅ Atualiza SOMENTE gameStats do user no backend
   * - Faz PUT /users/:id
   * - Atualiza o user no contexto para refletir no Header/Home sem depender do GET no Insomnia
   *
   * Observação: como não sabemos 100% seu DTO do backend,
   * este payload manda { gameStats: {...} } igual ao JSON do login.
   */
  const updateGameStats = useCallback(
    async (partialGameStats) => {
      if (!user?.id) {
        console.log('[AUTH] updateGameStats: sem user logado');
        return { ok: false, reason: 'NO_USER' };
      }

      try {
        setIsSyncing(true);

        const currentStats = user?.gameStats || {};

        const nextStats = {
          ...currentStats,
          ...partialGameStats,
        };

        const response = await fetch(`${API_BASE}/users/${user.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            gameStats: nextStats,
          }),
        });

        let data = null;
        try {
          data = await response.json();
        } catch (_e) {
          data = null;
        }

        if (!response.ok) {
          console.log('[AUTH] updateGameStats ERRO:', data);
          return { ok: false, status: response.status, data };
        }

        // ✅ se backend devolve o user atualizado, usamos ele
        // ✅ se não devolve, fazemos merge local (pra UI ficar consistente)
        const updatedUser = data?.id ? data : { ...user, gameStats: nextStats };

        setUser(updatedUser);

        console.log('[AUTH] updateGameStats OK:', updatedUser?.gameStats);
        return { ok: true, user: updatedUser };
      } catch (err) {
        console.log('[AUTH] updateGameStats EXCEPTION:', err);
        return { ok: false, error: String(err) };
      } finally {
        setIsSyncing(false);
      }
    },
    [API_BASE, user]
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isSyncing,
      login,
      logout,
      updateGameStats,
    }),
    [user, isSyncing, login, logout, updateGameStats]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
