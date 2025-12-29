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
} from './LifeLostModalStyles';

// Ajuste o caminho conforme sua estrutura
const failSound = require('../../assets/sounds/feedback/fail.mp3');

export default function LifeLostModal({ visible, onConfirm }) {
  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  useEffect(() => {
    if (!visible) return;

    const sound = new Sound(failSound, (error) => {
      if (error) {
        console.log('Erro ao carregar fail.mp3:', error);
        return;
      }

      sound.play((success) => {
        if (!success) {
          console.log('Falha ao reproduzir fail.mp3');
        }
        sound.release();
      });
    });

    // cleanup se o modal fechar antes do fim
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
      onRequestClose={onConfirm}
    >
      <Overlay>
        <Container>
          {/* --- TÍTULO COM EMOJI DE CORAÇÃO QUEBRADO 💔 --- */}
          <Title>Você ficou sem vidas! 💔</Title>

          <Message>
            Você atingiu o limite de erros nesta atividade.{'\n\n'}
            Vamos recomeçar do início com mais 2 chances para você tentar novamente. 🎵
          </Message>

          <Button onPress={onConfirm}>
            <ButtonText>RECOMEÇAR ATIVIDADE</ButtonText>
          </Button>
        </Container>
      </Overlay>
    </Modal>
  );
}
