// src/components/atividades/nivel/NivelIndicator.js
import React from 'react';
import { NivelContainer, DivisorLine, ImageIcon } from './NivelIndicatorStyles';


import Facil from '../../assets/icons/facil.png';
import Medio from '../../assets/icons/medio.png';
import Dificil from '../../assets/icons/dificil.png';

function getIconByNivel(nivel) {
  const nivelNormalizado = (nivel || 'facil').toString().toLowerCase();

  if (nivelNormalizado.startsWith('méd') || nivelNormalizado.startsWith('med')) {
    return Medio;
  }

  if (nivelNormalizado.startsWith('dif')) {
    return Dificil;
  }

  // default = fácil
  return Facil;
}

const NivelIndicator = ({ nivel }) => {
  const iconSource = getIconByNivel(nivel);

  return (
    <NivelContainer>
      <DivisorLine />
      <ImageIcon source={iconSource} resizeMode="contain" />
    </NivelContainer>
  );
};

export default NivelIndicator;
