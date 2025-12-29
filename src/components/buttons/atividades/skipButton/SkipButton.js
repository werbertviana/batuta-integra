import React from 'react';
import { SkipView, SkipText } from './SkipButtonStyles';  

const SkipButton = ({ onPress, children }) => {
  return (
    <SkipView onPress={onPress} activeOpacity={0.8}>
      <SkipText>
        {children || 'PULAR'}
      </SkipText>
    </SkipView>
  );
};

export default SkipButton;
