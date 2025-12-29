import React from 'react';
import {
  NextView,
  SkipView,
  PrevView,
  DoneView,
  TextPrimary,
  TextSecondary,
} from './ConteudoButtonsStyles';

// BOTÃO PRÓXIMO
export const ConteudoNextButton = () => (
  <NextView>
    <TextPrimary>PRÓXIMO</TextPrimary>
  </NextView>
);

// BOTÃO PULAR
export const ConteudoSkipButton = () => (
  <SkipView>
    <TextSecondary>PULAR</TextSecondary>
  </SkipView>
);

// BOTÃO VOLTAR
export const ConteudoPrevButton = () => (
  <PrevView>
    <TextSecondary>VOLTAR</TextSecondary>
  </PrevView>
);

// BOTÃO PRATICAR
export const ConteudoDoneButton = () => (
  <DoneView>
    <TextPrimary>PRATICAR</TextPrimary>
  </DoneView>
);
