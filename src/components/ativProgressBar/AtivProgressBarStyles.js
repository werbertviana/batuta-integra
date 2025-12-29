// src/components/ativProgressBar/AtivProgressBarStyles.js
import styled from 'styled-components/native';

export const ProgressBarContainer = styled.View`
  width: 90%;
  padding: 12px 16px;
  align-items: center;
`;

export const ProgressTrack = styled.View`
  width: 100%;
  height: 16px;
  border-radius: 999px;
  background-color: #dcdcdc;
  overflow: hidden;
  flex-direction: row;
`;

/**
 * Parte preenchida da barra (fundo verde)
 */
export const ProgressFill = styled.View`
  background-color: #3abf4a; /* verde da barra preenchida */
  border-radius: 999px;
  overflow: hidden;
  justify-content: flex-start;
`;

/**
 * "Brilho" interno – faixa clara na parte de cima da barra
 */
export const ProgressFillHighlight = styled.View`
  height: 40%;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.35);
`;

/**
 * Espaço vazio (parte não preenchida)
 */
export const ProgressSpacer = styled.View`
  background-color: transparent;
`;
