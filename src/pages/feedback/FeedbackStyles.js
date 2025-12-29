// src/pages/feedback/FeedbackStyles.js
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 32px 24px;
  align-items: center;
`;

export const BadgeWrapper = styled.View`
  margin-bottom: 16px;
`;

export const SparksRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SparkImage = styled.Image`
  width: 32px;
  height: 32px;
  margin-horizontal: 8px;
`;

export const BadgeImage = styled.Image`
  width: 140px;
  height: 140px;
`;

export const Banner = styled.View`
  margin-top: 12px;
  margin-bottom: 24px;
  padding-vertical: 10px;
  padding-horizontal: 24px;
  background-color: #f36b27; /* laranja da faixa */
  border-radius: 12px;
`;

export const BannerText = styled.Text`
  color: #ffffff;
  font-size: 22px;
  font-family: 'GothamCondensed-Bold';
  letter-spacing: 1px;
`;

export const Card = styled.View`
  width: 100%;
  background-color: #ffffff;
  border-radius: 18px;
  padding: 16px 20px;
  margin-bottom: 16px;

  /* sombra leve */
  shadow-color: #000000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  shadow-offset: 0px 2px;
  elevation: 3;
`;

export const CardLabel = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 18px;
  color: #666666;
  margin-bottom: 8px;
`;

export const CardValueRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardValue = styled.Text`
  font-family: 'GothamCondensed-Bold';
  font-size: 24px;
  color: #333333;
`;

export const CardIcon = styled.Image`
  width: 32px;
  height: 32px;
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  margin-top: 24px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 14px;
  border-radius: 30px;
  background-color: #ffc928; /* amarelo */
  align-items: center;

  /* sombra leve */
  shadow-color: #000000;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
  elevation: 2;
`;

export const SecondaryButtonText = styled.Text`
  font-family: 'GothamCondensed-Bold';
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 1px;
`;

export const PrimaryButton = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: 14px;
  border-radius: 30px;
  background-color: #34b1c7; /* azul padrão do app */
  align-items: center;
  margin-top: 12px;

  shadow-color: #000000;
  shadow-opacity: 0.15;
  shadow-radius: 4px;
  shadow-offset: 0px 2px;
  elevation: 2;
`;

export const PrimaryButtonText = styled.Text`
  font-family: 'GothamCondensed-Bold';
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 1px;
`;
