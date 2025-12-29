// src/components/ativHeader/AtivHeaderStyles.js
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const HeaderContainer = styled.SafeAreaView`
  width: 100%;
  background-color: #ffffff;
  border-bottom-width: 2px;
  border-bottom-color: #d2d3d5;
  padding: 10px 0;
`;

export const HeaderRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

/**
 * Ideia:
 * - LeftArea e RightArea têm a MESMA largura fixa (ex.: 60px)
 * - CenterArea tem flex: 1 → ocupa o meio da tela
 * Resultado: barra realmente centralizada, X e vidas “flutuando” nas laterais.
 */

export const LeftArea = styled.View`
  width: 60px;
  align-items: flex-start;
  justify-content: center;
  padding-left: 18px;
`;

export const CenterArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RightArea = styled.View`
  width: 60px;
  align-items: flex-end;
  justify-content: center;
  padding-right: 18px;
`;

export const TouchableHeader = styled.TouchableOpacity`
  padding: 8px;
`;

export const LifeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const LifeImage = styled(FastImage)`
  width: 45px;
  height: 45px;
`;

export const LifeText = styled.Text`
  font-family: DINRoundPro-Medi;
  font-size: 28px;
  color: #fc4848;
`;

export const ImageIcon = styled(FastImage)`
  width: 28px;
  height: 28px;
`;
