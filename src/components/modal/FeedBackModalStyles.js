import styled from 'styled-components/native';

export const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.45);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  border-radius: 16px;
  padding: 20px;
  background-color: #ffffff;
  align-items: center;
  border-width: 3px;
  border-color: ${(props) => (props.isCorrect ? '#61be4b' : '#ff4f4f')};
`;

export const ModalIcon = styled.Text`
  font-size: 40px;
  margin-bottom: 8px;
  color: ${(props) => (props.isCorrect ? '#61be4b' : '#ff4f4f')};
`;

export const InfoIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ModalTitle = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 25px;
  margin-right: 8px;
  text-align: center;
  color: ${(props) => (props.isCorrect ? '#61be4b' : '#ff4f4f')};
`;

export const ContainerTitle = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  justify-content: center;
  width: 100%;
`;

export const ModalMessage = styled.Text`
  font-family: 'GothamCondensed-Medium';
  font-size: 22px;
  text-align: center;
  margin-bottom: 12px;
  color: #333333;
`;

export const ModalAnswer = styled.Text`
  font-family: 'GothamCondensed-Bold';
  font-size: 22px;
  margin-bottom: 4px;
  color: #333333;
`;

export const ModalSelected = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
  color: #555555;
`;

export const ModalButton = styled.TouchableOpacity`
  margin-top: 8px;
  border-radius: 12px;
  background-color: ${(props) => (props.isCorrect ? '#61be4b' : '#FC4848')};
  justify-content: center;
  align-items: center;
  border-bottom-width: 4px;
  border-left-width: 0.1px;
  border-right-width: 0.1px;
  border-color:${(props) => (props.isCorrect ? '#38752B' : '#AD3335')};;
  padding-vertical: 10px;
  padding-horizontal: 24px;
`;


export const ModalButtonText = styled.Text`
  font-family: 'GothamCondensed-Medium';
  color: #ffffff;
  font-size: 26px;
`;
