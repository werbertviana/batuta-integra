import React, { useEffect } from 'react';
import { Modal, View } from 'react-native';
import Sound from 'react-native-sound';

import {
  Overlay,
  Container,
  Title,
  MessageContainer,
  MessageText,
  MessageSubText,
  InfoBox,
  InfoLabel,
  InfoValue,
  InfoIcon,
  ButtonsRow,
  ActionButton,
  ActionButtonText,
  ActionButton2,
  Divider,
} from './ResumoAtividadeModalStyles';

import CheckIcon from '../../assets/icons/check.png';
import ErrorIcon from '../../assets/icons/fail.png';
import XpIcon from '../../assets/icons/xp.png';

// Sons de feedback
const win2Sound = require('../../assets/sounds/feedback/win2.mp3');
const failSound = require('../../assets/sounds/feedback/fail.mp3');

function formatPercent(value) {
  if (value == null) return '0%';
  return `${Math.round(value)}%`;
}

export default function ResumoAtividadeModal({
  visible,
  resumoDados,
  onClose,
  onRecomecar,
  onContinuar,
}) {
  // Configura categoria do áudio (uma vez)
  useEffect(() => {
    Sound.setCategory('Playback');
  }, []);

  // calcula aprovado mesmo que resumoDados ainda seja undefined
  const percentualAcerto = resumoDados?.percentualAcerto ?? 0;
  const aprovado = percentualAcerto >= 50;

  // Tocar win2 ou fail ao abrir o modal de resumo, conforme aprovado
  useEffect(() => {
    if (!visible || !resumoDados) return;

    const soundFile = aprovado ? win2Sound : failSound;

    const sound = new Sound(soundFile, (error) => {
      if (error) {
        console.log('Erro ao carregar som do resumo:', error);
        return;
      }

      sound.play((success) => {
        if (!success) {
          console.log('Erro ao reproduzir som do resumo');
        }
        sound.release();
      });
    });

    // Cleanup caso o modal feche antes do fim
    return () => {
      try {
        sound.stop(() => sound.release());
      } catch (e) {}
    };
  }, [visible, aprovado, resumoDados]);

  // ⚠️ Só agora fazemos o early return
  if (!resumoDados) return null;

  const { totalQuestoes, acertos, erros } = resumoDados;

  // Emoji dinâmico no título
  const tituloEmoji = aprovado ? '🎉' : '📊';

  const handleRecomecarPress = () => {
    if (onRecomecar) onRecomecar();
  };

  const handleContinuarPress = () => {
    if (onContinuar) onContinuar();
    else if (onClose) onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={handleContinuarPress}
    >
      <Overlay>
        <Container>
          <Title>RESUMO DA ATIVIDADE {tituloEmoji}</Title>

          <MessageContainer>
            {aprovado ? (
              <>
                <MessageText variant="success">
                  Parabéns! Você mandou muito bem! 🎵
                </MessageText>
                <MessageSubText>
                  Com {formatPercent(percentualAcerto)} de aproveitamento, você está
                  avançando na sua jornada musical.
                </MessageSubText>
              </>
            ) : (
              <>
                <MessageText variant="fail">
                  Boa tentativa! Não desanime. 🎶
                </MessageText>
                <MessageSubText>
                  Para avançar, você precisa de pelo menos 50% de acertos.
                  Que tal tentar de novo e melhorar seu resultado?
                </MessageSubText>
              </>
            )}
          </MessageContainer>

          <InfoBox>
            <InfoLabel>Acertos</InfoLabel>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <InfoValue>{acertos}</InfoValue>
              <InfoIcon source={CheckIcon} resizeMode="contain" />
            </View>
          </InfoBox>

          <InfoBox>
            <InfoLabel>Erros</InfoLabel>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <InfoValue>{erros}</InfoValue>
              <InfoIcon source={ErrorIcon} resizeMode="contain" />
            </View>
          </InfoBox>

          {resumoDados?.xpGanho !== undefined && (
            <InfoBox>
              <InfoLabel>XP ganho</InfoLabel>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <InfoValue>{resumoDados.xpGanho}</InfoValue>
                <InfoIcon source={XpIcon} resizeMode="contain" />
              </View>
            </InfoBox>
          )}

          <Divider />

          <ButtonsRow>
            <ActionButton onPress={handleRecomecarPress}>
              <ActionButtonText>RECOMEÇAR</ActionButtonText>
            </ActionButton>

            <ActionButton2 onPress={handleContinuarPress}>
              <ActionButtonText>CONTINUAR</ActionButtonText>
            </ActionButton2>
          </ButtonsRow>
        </Container>
      </Overlay>
    </Modal>
  );
}
