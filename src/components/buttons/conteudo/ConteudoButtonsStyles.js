import styled from 'styled-components/native';

export const ButtonBase = styled.View`
  width: 150px;
  height: 55px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const NextView = styled(ButtonBase)`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3CB1C7;
  border-bottom-width: 4px;
  border-color: #236A79;
  border-left-width: 0.005px;
  border-right-width: 0.005px;
  margin-bottom: 10px;
`;

export const SkipView = styled(ButtonBase)`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: 'center';
  border-radius: 12px;
  border-color: #D2D3D5;
  background-color: #FFFFFF;
  border-width: 1px;
  border-bottom-width: 4px;
  border-color: #D2D3D5;
`;

export const PrevView = styled(ButtonBase)`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: 'center';
  border-radius: 12px;
  border-color: #D2D3D5;
  border-width: 1px;
  background-color: #FFFFFF;
  border-bottom-width: 4px;
  border-bottom-color: #D2D3D5;
`;

export const DoneView = styled(ButtonBase)`
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border-bottom-width: 4px;
  border-left-width: 0.005px;
  border-right-width: 0.005px;
  border-color: #7A477C;
  background-color: #AF74B0; 
  margin-bottom: 10px;
`;

export const TextPrimary = styled.Text`
  font-family: GothamCondensed-Medium;
  text-align: center ;
  color: white;
  font-size: 35px;
`;

export const TextSecondary = styled.Text`
  font-family: GothamCondensed-Medium;
  text-align: center;
  color: black;
  font-size: 35px;
`;
