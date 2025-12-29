import React, { useEffect } from 'react';
import { Modal } from 'react-native';
import Sound from 'react-native-sound';

import {
  Overlay,
  Container,
  Title,
  Message,
  Button,
  ButtonText,
} from './BonusLifeModalStyles';

// Som de vitória ao ganhar bônus de vida
const victorySound = require('../../assets/sounds/feedback/victory.mp3');

export default function BonusLifeModal({ visible, onClose }) {
  // Categoria de áudio
  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  // Toca victory.mp3 sempre que o modal abrir
  useEffect(() => {
    if (!visible) return;

    const sound = new Sound(victorySound, (error) => {
      if (error) {
        console.log('Erro ao carregar victory.mp3:', error);
        return;
      }

      sound.play((success) => {
        if (!success) {
          console.log('Erro ao reproduzir victory.mp3');
        }
        sound.release();
      });
    });

    return () => {
      try {
        sound.stop(() => sound.release());
      } catch (e) {}
    };
  }, [visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Overlay>
        <Container>
          <Title>Parabéns! 🎉</Title>

          <Message>
            Você concluiu a atividade sem perder todas as vidas
            e ganhou{'\n'}
            <Message style={{ fontWeight: 'GothamCondensed-Bold',fontSize: 28 }}>+ 1 ponto de vida!</Message>
          </Message>

          <Button onPress={onClose}>
            <ButtonText>CONTINUAR</ButtonText>
          </Button>
        </Container>
      </Overlay>
    </Modal>
  );
}
