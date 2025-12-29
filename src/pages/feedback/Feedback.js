// src/pages/feedback/Feedback.js
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Content,
  BadgeWrapper,
  BadgeImage,
  SparksRow,
  SparkImage,
  Banner,
  BannerText,
  Card,
  CardLabel,
  CardValueRow,
  CardValue,
  CardIcon,
  ButtonsWrapper,
  SecondaryButton,
  SecondaryButtonText,
  PrimaryButton,
  PrimaryButtonText,
} from './FeedbackStyles';

// ⚠️ Ajuste os caminhos/nomes dessas imagens conforme sua pasta de assets
import BadgeIcon from '../../assets/images/feedback/atividade_concluida.png';
import XpIcon from '../../assets/icons/xp.png';
import CheckIcon from '../../assets/icons/check.png';
import FailIcon from '../../assets/icons/fail.png';

function Feedback() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    // dados da atividade recebidos via navigation
    totalQuestions = 0,
    correctAnswers = 0,
    xpEarned, // opcional — se não vier, calculo algo simples
    passed, // opcional — se não vier, calculo aqui (>=50%)
    activityRouteName, // nome da tela da atividade para "Recomeçar"
    resultadoAtividade, // opcional — caso você já monte o objeto antes
  } = route.params || {};

  const computedPassed =
    typeof passed === 'boolean'
      ? passed
      : totalQuestions > 0 && correctAnswers / totalQuestions >= 0.5;

  const computedXp =
    typeof xpEarned === 'number' ? xpEarned : correctAnswers * 5;

  const scoreText =
    totalQuestions > 0 ? `${correctAnswers}/${totalQuestions}` : '--';

  const payloadResultado =
    resultadoAtividade ||
    {
      totalQuestoes: totalQuestions,
      acertos: correctAnswers,
      aprovado: computedPassed,
    };

  const handleRestart = () => {
    // Recomeçar a mesma atividade
    if (activityRouteName) {
      // replace para não acumular pilha
      navigation.replace(activityRouteName);
    } else {
      navigation.goBack();
    }
  };

  const handleContinue = () => {
    // Mesmo comportamento do "OK" do modal antigo:
    // volta pra Home e manda o resultado para atualizar nível.
    navigation.navigate('Tab', {
      screen: 'Home',
      params: {
        resultadoAtividade: payloadResultado,
      },
    });
  };

  return (
    <Container>
      <Content>
        {/* Ícone grande + fogos */}
        <BadgeWrapper>
          <SparksRow>
        
            <BadgeImage source={BadgeIcon} resizeMode="contain" />
            
          </SparksRow>
        </BadgeWrapper>

        {/* Faixa "ATIVIDADE CONCLUÍDA!" */}
        <Banner>
          <BannerText>ATIVIDADE CONCLUÍDA!</BannerText>
        </Banner>

        {/* Card XP */}
        <Card>
          <CardLabel>XP DA ATIVIDADE</CardLabel>
          <CardValueRow>
            <CardValue>{computedXp}</CardValue>
            <CardIcon source={XpIcon} resizeMode="contain" />
          </CardValueRow>
        </Card>

        {/* Card Pontuação */}
        <Card>
          <CardLabel>PONTUAÇÃO DA ATIVIDADE</CardLabel>
          <CardValueRow>
            <CardValue>{scoreText}</CardValue>
            <CardIcon
              source={computedPassed ? CheckIcon : FailIcon}
              resizeMode="contain"
            />
          </CardValueRow>
        </Card>

        {/* Botões */}
        <ButtonsWrapper>
          <SecondaryButton onPress={handleRestart}>
            <SecondaryButtonText>RECOMEÇAR</SecondaryButtonText>
          </SecondaryButton>

          <PrimaryButton onPress={handleContinue}>
            <PrimaryButtonText>CONTINUAR</PrimaryButtonText>
          </PrimaryButton>
        </ButtonsWrapper>
      </Content>
    </Container>
  );
}

export default Feedback;
