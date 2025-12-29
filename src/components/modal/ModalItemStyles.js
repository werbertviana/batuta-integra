import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';


export const ModalContainer = styled.SafeAreaView`
  background-color: #236A79;
  border-radius: 8px;
  width: 240px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: #236A79;
`;

export const ContentView = styled.SafeAreaView`
  margin: 10px;
  align-items: center;
  background-color: #3CB1C7;
  border-radius: 5px;
  border-color: #BBDAE5;
  border-bottom-width: 4px;
  justify-content: center;
  width: 200px;
  height: 40px;
`;

export const PracticeView = styled.SafeAreaView`
  margin: 10px;
  align-items: center;
  background-color:white;
  border-radius: 5px;
  border-color: #BBDAE5;
  border-bottom-width: 4px;
  justify-content: center;
  width: 200px;
  height: 40px;
`;

export const ContentText = styled.Text`
  font-family: GothamCondensed-Medium;
  font-size: 25px;
  color: white;
`;

export const PracticeText = styled.Text`
  font-family: GothamCondensed-Medium;
  font-size: 25px;
  color: #3CB1C7;
`;

export const XPText = styled.Text`
  color: #DAA520;
  font-family: GothamCondensed-Medium;
`;

export const IconImage = styled(FastImage)`
  margin: 10px;
  width: 200px;
  height: 40px;
`;

export const Triangle = styled.SafeAreaView`
  width: 0;
  height: 0;
  border-left-width: 10px;
  border-right-width: 10px;
  border-top-width: 15px; 
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #236A79;
`;



