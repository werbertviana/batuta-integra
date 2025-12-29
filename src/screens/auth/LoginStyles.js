// src/screens/auth/LoginStyles.js
import styled from 'styled-components/native';

export const Background = styled.ImageBackground`
  flex: 1;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: blue;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 32px 24px 40px;
  justify-content: space-between;
  background-color: green;
`;

/* LOGO */
export const LogoContainer = styled.View`
  margin-top: 120px;
  align-items: center;
  justify-content: flex-end;
`;

export const LogoImage = styled.Image`
  width: 180px;
  height: 180px;
`;

/* FORMULÁRIO */
export const Form = styled.View`
    width: 80%;
    margin-top: 24px;
    
`;

export const InputWrapper = styled.View`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    background-color: #EBECEC;
    border-radius: 12px;
    height: 50px;
`;

export const InputIconArea = styled.View`
  width: 35px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const InputIconText = styled.Text`
  font-size: 15px;
`;

export const StyledTextInput = styled.TextInput`
  flex: 1;
  font-size: 20px;
  color: #333333;
  font-family: 'GothamCondensed-Medium';
`;

export const ForgotPasswordText = styled.Text`
  margin-top: 12px;
  font-size: 22px;
  color: #222222;
  font-family: 'GothamCondensed-Medium';
`;

/* BOTÕES */
export const ButtonsContainer = styled.View`
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-top: 35px;
`;

/* Botão principal - ENTRAR (amarelo) */
export const PrimaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 62px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3CB1C7;
  border-bottom-width: 4px;
  border-color: #236A79;
  border-left-width: 0.005px;
  border-right-width: 0.005px;
  margin-bottom: 20px;
`;

/* Botão secundário - CRIAR CONTA (azul) */
export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  height: 62px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #FDC500;
  border-bottom-width: 4px;
  border-color: #DAA520;
  border-left-width: 0.005px;
  border-right-width: 0.005px;
`;

export const ButtonText = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 30px;
  color: #ffffff;
  letter-spacing: 1px;
`;
