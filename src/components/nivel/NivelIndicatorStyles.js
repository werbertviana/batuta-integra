// src/components/atividades/nivel/NivelIndicatorStyles.js
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const NivelContainer = styled.SafeAreaView`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const DivisorLine = styled.SafeAreaView`
  width: 90%;
  height: 2px;
  background-color: #d2d3d5;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ImageIcon = styled(FastImage)`
  position: absolute;
  width: 35px;
  height: 35px;
`;
