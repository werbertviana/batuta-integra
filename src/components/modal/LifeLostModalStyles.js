import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 85%;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 20px;
  elevation: 8;
`;

export const Title = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 28px;
  text-align: center;
  color: #e74c3c;
  margin-bottom: 12px;
`;

export const Message = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 22px;
  text-align: center;
  color: #555555;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 24px;
  height: 52px;
  border-radius: 12px;
  background-color: #34b1c7;
  justify-content: center;
  align-items: center;
  border-bottom-width: 4px;
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-color: #236a79;
`;

export const ButtonText = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 24px;
  color: #ffffff;
  letter-spacing: 1px;
`;
