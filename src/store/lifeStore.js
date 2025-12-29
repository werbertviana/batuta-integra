// Vida global do usuário no app todo
let lifeGlobal = 2;

export const getLifeGlobal = () => lifeGlobal;

export const setLifeGlobal = (value) => {
  // garante que nunca fique negativo
  const safeValue = typeof value === 'number' ? Math.max(0, value) : 0;
  lifeGlobal = safeValue;
};
