// src/components/ativHeader/AtivHeader.js
import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  HeaderContainer,
  HeaderRow,
  LeftArea,
  CenterArea,
  RightArea,
  TouchableHeader,
  LifeContainer,
  LifeImage,
  LifeText,
  ImageIcon,
} from './AtivHeaderStyles';

import Life from '../../assets/icons/life.png';
import IconeX from '../../assets/icons/x.png';

import AtivProgressBar from '../ativProgressBar/AtivProgressBar';
import { getLifeGlobal, setLifeGlobal } from '../../store/lifeStore';

const AtivHeader = forwardRef(({ progress, onClose }, ref) => {
  const navigation = useNavigation();
  const [lifePoints, setLifePoints] = useState(() => getLifeGlobal() ?? 2);

  useImperativeHandle(
    ref,
    () => ({
      getLives: () => lifePoints,

      loseLife: () => {
        setLifePoints((prev) => {
          const updated = Math.max(prev - 1, 0);
          setLifeGlobal(updated);
          return updated;
        });
      },

      resetLives: () => {
        setLifePoints(2);
        setLifeGlobal(2);
      },
    }),
    [lifePoints],
  );

  const handleClose = () => {
    if (onClose) onClose();
    else navigation.goBack();
  };

  const showProgress = typeof progress === 'number';

  return (
    <HeaderContainer>
      <HeaderRow>

        {/* ESQUERDA — BOTÃO X */}
        <LeftArea>
          <TouchableHeader onPress={handleClose}>
            <ImageIcon source={IconeX} />
          </TouchableHeader>
        </LeftArea>

        {/* CENTRO — BARRA DE PROGRESSO */}
        <CenterArea>
          {showProgress && <AtivProgressBar progress={progress} />}
        </CenterArea>

        {/* DIREITA — VIDAS */}
        <RightArea>
          <LifeContainer>
            <LifeImage source={Life} />
            <LifeText>{lifePoints}</LifeText>
          </LifeContainer>
        </RightArea>

      </HeaderRow>
    </HeaderContainer>
  );
});

export default AtivHeader;
