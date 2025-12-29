import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import Sound from 'react-native-sound';
import CheckIcon from '../../assets/icons/check.png';
import ErrorIcon from '../../assets/icons/fail.png';

import {
  ModalOverlay,
  ModalContent,
  ContainerTitle,
  ModalTitle,
  ModalMessage,
  ModalAnswer,
  ModalSelected,
  ModalButton,
  ModalButtonText,
  InfoIcon
} from './FeedBackModalStyles';

// Ajuste os caminhos se a estrutura for diferente
const winSound = require('../../assets/sounds/feedback/win.mp3');
const loseSound = require('../../assets/sounds/feedback/lose.mp3');

const FeedbackModal = ({
  visible,
  onClose,
  isCorrect,
  correctAlternative, // <-- vem da props (feedbackInfo.correctAlternative)
  selectedAlternative, // <-- opcional
}) => {
  // Configura categoria (recomendado pela lib)
  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  // Toca o som sempre que o modal abrir com um resultado (certo/errado)
  useEffect(() => {
    if (!visible || typeof isCorrect !== 'boolean') return;

    const soundFile = isCorrect ? winSound : loseSound;

    const sound = new Sound(soundFile, (error) => {
      if (error) {
        console.log('Erro ao carregar som de feedback:', error);
        return;
      }

      sound.play((success) => {
        if (!success) {
          console.log('Falha ao reproduzir som de feedback');
        }
        sound.release();
      });
    });

    // cleanup se o componente desmontar / visible mudar antes do fim do áudio
    return () => {
      try {
        sound.stop(() => {
          sound.release();
        });
      } catch (e) {
        // evita erro se o som já foi liberado
      }
    };
  }, [visible, isCorrect]);

  if (!visible) return null;

  const hasCorrectAlternative = Boolean(correctAlternative);
  const hasSelectedAlternative = Boolean(selectedAlternative);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalOverlay>
        <ModalContent isCorrect={isCorrect}>
          <ContainerTitle>
            <ModalTitle isCorrect={isCorrect}>
              {isCorrect ? 'RESPOSTA CORRETA!' : 'RESPOSTA INCORRETA!'}
            </ModalTitle>
            <InfoIcon source={isCorrect ? CheckIcon : ErrorIcon} resizeMode="contain" isCorrect={isCorrect} 
            />
          </ContainerTitle>

          <ModalMessage>
            {isCorrect
              ? 'Mandou bem! Você escolheu a alternativa correta.'
              : 'Erros fazem parte do aprendizado. Tente novamente!'}
          </ModalMessage>

          {hasCorrectAlternative && (
            <ModalAnswer>
              Alternativa correta: {correctAlternative}
            </ModalAnswer>
          )}

          {hasSelectedAlternative && (
            <ModalSelected>
              Sua resposta: {selectedAlternative}
            </ModalSelected>
          )}

          <ModalButton
            isCorrect={isCorrect}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <ModalButtonText>CONTINUAR</ModalButtonText>
          </ModalButton>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default FeedbackModal;
