import React from 'react';
import { NextView, NextText } from './NextButtonStyles';  

// Agora o botão aceita props (principalmente onPress)
const NextButton = ({ onPress, children }) => {
  return (
    <NextView onPress={onPress} activeOpacity={0.8}>
      <NextText>
        {children || 'CONFIRMAR'}
      </NextText>
    </NextView>
  );
};

export default NextButton;
