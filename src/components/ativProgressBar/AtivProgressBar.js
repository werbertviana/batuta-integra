// src/components/ativProgressBar/AtivProgressBar.js
import React from 'react';
import {
  ProgressBarContainer,
  ProgressTrack,
  ProgressFill,
  ProgressFillHighlight,
  ProgressSpacer,
} from './AtivProgressBarStyles';

/**
 * progress: número entre 0 e 1 (ex.: 0.33, 0.5, 1)
 */
const AtivProgressBar = ({ progress = 0 }) => {
  // Garante que o valor fica entre 0 e 1
  const safeProgress =
    typeof progress === 'number'
      ? Math.max(0, Math.min(1, progress))
      : 0;

  return (
    <ProgressBarContainer>
      <ProgressTrack>
        {/* parte preenchida com brilho */}
        <ProgressFill style={{ flex: safeProgress }}>
          <ProgressFillHighlight />
        </ProgressFill>

        {/* espaço vazio para completar a barra */}
        <ProgressSpacer style={{ flex: 1 - safeProgress }} />
      </ProgressTrack>
    </ProgressBarContainer>
  );
};

export default AtivProgressBar;
