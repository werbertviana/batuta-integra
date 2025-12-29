// src/pages/atividades/licao01/clave/AtivClave.js
import React, { useState, useRef } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AtivHeader from '../../../../components/ativHeader/AtivHeader';

import {
  AtivContainer,
  AlternativasContainer,
  AlternativaContainer2,
  ButtonContainer,
  QuestaoText,
  AlternativaContainer,
  CircleContainer,
  CircleInline,
  ImageContainer,
  ImageAlternativa,
  AlternativaText,
} from './AtivClaveStyles';

import SkipButton from '../../../../components/buttons/atividades/skipButton/SkipButton';
import NextButton from '../../../../components/buttons/atividades/nextButton/NextButton';

import staticAtividades from '../../../../data/atividades/licao01/clave/ativClave.json';

import Q01 from '../../../../assets/images/atividades/licao01/clave/Q01.png';
import Q02 from '../../../../assets/images/atividades/licao01/clave/Q02.png';
import Q03 from '../../../../assets/images/atividades/licao01/clave/Q03.png';
import Q04 from '../../../../assets/images/atividades/licao01/clave/Q04.png';

import FeedbackModal from '../../../../components/modal/FeedbackModal';
import ResumoAtividadeModal from '../../../../components/modal/ResumoAtividadeModal';
import LifeLostModal from '../../../../components/modal/LifeLostModal';

import { CircleText } from '../introducao/AtivIntroStyles';
import NivelIndicator from '../../../../components/nivel/NivelIndicator';

function AtivClave() {
  const navigation = useNavigation();
  const headerRef = useRef(null);

  const allAtividades = staticAtividades.atividades;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);

  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackInfo, setFeedbackInfo] = useState({
    isCorrect: false,
    correctAlternative: '',
  });

  const [resumoVisible, setResumoVisible] = useState(false);
  const [resumoDados, setResumoDados] = useState(null);

  const [lifeModalVisible, setLifeModalVisible] = useState(false);

  const acertosRef = useRef(0);
  const errosRef = useRef(0);
  const xpRef = useRef(0); // XP acumulado nesta atividade

  // Flag para saber se em ALGUM momento dessa atividade houve game over
  const teveGameOverRef = useRef(false);

  // Flag para saber se o bônus desta atividade já foi concedido
  const bonusJaConcedidoRef = useRef(false);

  const questaoAtual = allAtividades[currentIndex];

  // -----------------------------
  //   Helpers
  // -----------------------------

  const getImages = (imagem) => {
    switch (imagem) {
      case 'Q01.png':
        return <ImageAlternativa resizeMode="contain" source={Q01} />;
      case 'Q02.png':
        return <ImageAlternativa resizeMode="contain" source={Q02} />;
      case 'Q03.png':
        return <ImageAlternativa resizeMode="contain" source={Q03} />;
      case 'Q04.png':
        return <ImageAlternativa resizeMode="contain" source={Q04} />;
      default:
        return null;
    }
  };

  const tipoQuestaoRaw =
    typeof questaoAtual?.tipo === 'string'
      ? questaoAtual.tipo.toLowerCase()
      : '';

  const tipoQuestao = tipoQuestaoRaw === 'texto' ? 'texto' : 'figura';

  // -----------------------------
  //   Seleção de alternativas
  // -----------------------------

  const handleSelectAlternative = (alternativa) => {
    setRespostaSelecionada(alternativa);
  };

  // -----------------------------
  //   Resumo / Navegação
  // -----------------------------

  const calcularResumo = () => {
    const totalQuestoes = allAtividades.length;
    const acertos = acertosRef.current;
    const erros = errosRef.current;
    const percentualAcerto = (acertos / totalQuestoes) * 100;
    const aprovado = percentualAcerto >= 50;
    const xpGanho = xpRef.current;

    // vidas que sobraram no header da atividade
    let vidasRestantes = 2;
    if (headerRef.current?.getLives) {
      const v = headerRef.current.getLives();
      if (typeof v === 'number') {
        vidasRestantes = v;
      }
    }

    // Regra de bônus:
    // - acertou TODAS as questões
    // - foi aprovado
    // - NUNCA teve game over nessa atividade
    // - e ainda NÃO recebeu o bônus desta atividade antes
    const acertouTudo = acertos === totalQuestoes;
    const podeGanharBonus =
      aprovado &&
      acertouTudo &&
      !teveGameOverRef.current &&
      !bonusJaConcedidoRef.current;

    return {
      totalQuestoes,
      acertos,
      erros,
      percentualAcerto,
      aprovado,
      xpGanho,
      vidasRestantes,
      bonusVida: podeGanharBonus,
      atividade: 'clave',
    };
  };

  const mostrarResumoFinal = () => {
    const resultado = calcularResumo();

    // se esse resumo deu direito a bônus, marca que essa atividade já concedeu bônus
    if (resultado.bonusVida) {
      bonusJaConcedidoRef.current = true;
    }

    setResumoDados(resultado);
    setResumoVisible(true);
  };

  const navegarParaHomeComResultado = () => {
    if (!resumoDados) return;

    navigation.navigate('Tab', {
      screen: 'Home',
      params: {
        resultadoAtividade: resumoDados,
      },
    });
  };

  // -----------------------------
  //   Lógica de vidas
  // -----------------------------

  const aplicarPerdaDeVida = () => {
    // lê vidas ANTES de perder
    let vidasAntes = 2;
    if (headerRef.current?.getLives) {
      const v = headerRef.current.getLives();
      if (typeof v === 'number') {
        vidasAntes = v;
      }
    }

    if (headerRef.current?.loseLife) {
      headerRef.current.loseLife();
    }

    // começa com 2
    // 1º erro: 2 -> 1
    // 2º erro: 1 -> 0
    // 3º erro: 0 -> 0 (game over)
    if (vidasAntes === 0) {
      // já estava em 0 e errou de novo → game over
      teveGameOverRef.current = true;
      setFeedbackVisible(false);
      setLifeModalVisible(true);
      return true;
    }

    return false;
  };

  // -----------------------------
  //   Botões
  // -----------------------------

  const handleConfirm = () => {
    if (!respostaSelecionada) {
      Alert.alert('Atenção', 'Selecione uma alternativa antes de confirmar.');
      return;
    }

    const alternativaCorreta = questaoAtual.alternativa_correta;
    const isCorrect = respostaSelecionada === alternativaCorreta;

    if (isCorrect) {
      // acerto → +xp, não perde vida
      acertosRef.current += 1;
      xpRef.current += 2; // +2 XP por acerto
    } else {
      // erro → conta erro e pode perder vida
      errosRef.current += 1;

      const gameOver = aplicarPerdaDeVida();
      if (gameOver) {
        // se acabou as vidas, não mostra feedback nem vai pro resumo
        return;
      }
    }

    setFeedbackInfo({
      isCorrect,
      correctAlternative: alternativaCorreta,
    });

    setFeedbackVisible(true);
  };

  const handleCloseFeedback = () => {
    setFeedbackVisible(false);

    const proximaQuestaoIndex = currentIndex + 1;
    const temProximaQuestao = proximaQuestaoIndex < allAtividades.length;

    if (temProximaQuestao) {
      setCurrentIndex((prev) => prev + 1);
      setRespostaSelecionada(null);
    } else {
      mostrarResumoFinal();
    }
  };

  const handleSkip = () => {
    // pular também conta como erro
    errosRef.current += 1;

    const gameOver = aplicarPerdaDeVida();
    if (gameOver) {
      return;
    }

    const proximaQuestaoIndex = currentIndex + 1;
    const temProximaQuestao = proximaQuestaoIndex < allAtividades.length;

    if (temProximaQuestao) {
      setCurrentIndex((prev) => prev + 1);
      setRespostaSelecionada(null);
    } else {
      mostrarResumoFinal();
    }
  };

  // -----------------------------
  //   Render de alternativas
  // -----------------------------

  const renderAlternativaFigura = (alternativa, imagem) => {
    const isSelected = respostaSelecionada === alternativa;

    return (
      <AlternativaContainer
        key={alternativa}
        onPress={() => handleSelectAlternative(alternativa)}
        style={isSelected ? { borderColor: '#34B1C7' } : null}
      >
        <ImageContainer>
          <CircleContainer style={isSelected ? { borderColor: '#34B1C7' } : null}>
            <CircleText>{alternativa}</CircleText>
          </CircleContainer>
          {getImages(imagem)}
        </ImageContainer>
      </AlternativaContainer>
    );
  };

  const renderAlternativaTexto = (alternativa, texto) => {
    const isSelected = respostaSelecionada === alternativa;

    return (
      <AlternativaContainer2
        key={alternativa}
        onPress={() => handleSelectAlternative(alternativa)}
        style={isSelected ? { borderColor: '#34B1C7' } : null}
      >
        <CircleInline style={isSelected ? { borderColor: '#34B1C7' } : null}>
          <CircleText>{alternativa}</CircleText>
        </CircleInline>

        <AlternativaText numberOfLines={3}>{texto}</AlternativaText>
      </AlternativaContainer2>
    );
  };

  const renderQuestao = () => (
    <View>
      <QuestaoText>{questaoAtual.questao}</QuestaoText>

      <AlternativasContainer
        style={tipoQuestao === 'texto' ? { flexDirection: 'column' } : null}
      >
        {questaoAtual.opcoes.map((item) =>
          tipoQuestao === 'texto'
            ? renderAlternativaTexto(item.alternativa, item.texto)
            : renderAlternativaFigura(item.alternativa, item.imagem),
        )}
      </AlternativasContainer>
    </View>
  );

  // -----------------------------
  //   Recomeçar / Sair
  // -----------------------------

  const handleRecomecar = () => {
    // Recomeçar pelo RESUMO:
    // → zera pontuação da atividade, mas NÃO devolve vidas
    acertosRef.current = 0;
    errosRef.current = 0;
    xpRef.current = 0;

    setResumoVisible(false);
    setFeedbackVisible(false);
    setRespostaSelecionada(null);
    setCurrentIndex(0);
    // NÃO chama resetLives aqui: vida perdida continua perdida
    // e não zera o teveGameOverRef nem bonusJaConcedidoRef:
    // se já teve game over ou já ganhou bônus antes,
    // isso continua valendo para esta atividade.
  };

  const handleFecharResumo = () => {
    setResumoVisible(false);
    navegarParaHomeComResultado();
  };

  const handleLifeModalConfirm = () => {
    // Recomeçar POR TER PERDIDO TODAS AS VIDAS:
    // → aqui SIM devolve as 2 vidas
    setLifeModalVisible(false);

    acertosRef.current = 0;
    errosRef.current = 0;
    xpRef.current = 0;

    setResumoVisible(false);
    setFeedbackVisible(false);
    setRespostaSelecionada(null);
    setCurrentIndex(0);

    if (headerRef.current?.resetLives) {
      headerRef.current.resetLives();
    }
    // teveGameOverRef permanece true → não ganha bônus nesta atividade
    // bonusJaConcedidoRef também permanece como estava.
  };

  // fechar atividade pelo X, levando as vidas atuais para a Home
  const handleCloseActivity = () => {
    const resumoParcial = calcularResumo();

    const resultado = {
      ...resumoParcial,
      aprovado: false, // saindo no X não conta como aprovado
      xpGanho: 0, // não salva XP parcial
      bonusVida: false, // nunca dá bônus saindo pelo X
    };

    navigation.navigate('Tab', {
      screen: 'Home',
      params: {
        resultadoAtividade: resultado,
      },
    });
  };

  // progresso da barra
  const progress = (currentIndex + 1) / allAtividades.length;

  // -----------------------------
  //   JSX
  // -----------------------------

  return (
    <AtivContainer>
      <AtivHeader
        ref={headerRef}
        progress={progress}
        onClose={handleCloseActivity}
      />

      <NivelIndicator nivel={questaoAtual?.nivel} />

      <FlatList
        data={[questaoAtual]}
        keyExtractor={(data) => data.id}
        renderItem={renderQuestao}
        showsVerticalScrollIndicator={false}
      />

      <ButtonContainer>
        <SkipButton onPress={handleSkip} />
        <NextButton onPress={handleConfirm} />
      </ButtonContainer>

      <FeedbackModal
        visible={feedbackVisible}
        isCorrect={feedbackInfo.isCorrect}
        correctAlternative={feedbackInfo.correctAlternative}
        onClose={handleCloseFeedback}
      />

      <ResumoAtividadeModal
        visible={resumoVisible}
        resumoDados={resumoDados}
        onClose={handleFecharResumo}
        onRecomecar={handleRecomecar}
        onContinuar={handleFecharResumo}
      />

      <LifeLostModal
        visible={lifeModalVisible}
        onConfirm={handleLifeModalConfirm}
      />
    </AtivContainer>
  );
}

export default AtivClave;
