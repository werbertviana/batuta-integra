import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const HeaderContainer = styled.SafeAreaView`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 2%;
    border-bottom-width: 1px;
    border-bottom-color: #D2D3D5;
    background-color: #FFFFFF;
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFFFFF;
`;

export const SlideView = styled.SafeAreaView`
    height: 70%;
    width: 100%;
    align-items: center;
    padding: 2px;
    justify-content: center;
   
`;

export const FlatView = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    
`;


export const SlideView2 = styled.SafeAreaView`
    margin-top: 10%;
    height: 45%;
    width: 100%;
    align-items: center;
    padding: 2px;
    justify-content: center;
`;

export const SlideView3 = styled.SafeAreaView`
    height: 90px;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-around;
   
   
`;

export const Div = styled.SafeAreaView`
    margin-top: 2%;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const DivFinal = styled.SafeAreaView`
    margin-top: 2%;
    margin-bottom: 15px;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

export const DivisorLine2 = styled.SafeAreaView`
    margin-top: 10px;
    width: 100%;
    height: 2px;
    background-color: #D2D3D5;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;  

export const TouchableHeader = styled.TouchableOpacity`
    align-self: flex-start;
    position: absolute;
    margin-left: 3%;
    margin-bottom: 1%;
`;

export const ImageIcon = styled(FastImage)`
    width: 35px;
    height: 35px;
`;

export const ImageTitle = styled(FastImage)`
    width: 225px;
    height: 80px;
    margin-bottom: 1%;
`;

export const ImageSound = styled(FastImage)`
    width: 40px;
    height: 40px;
    margin: 2px;
`;

export const DivisorLine = styled.SafeAreaView`
  width: 40%;
  height: 3px;
  background-color: #D2D3D5;
  border-radius: 5px;
  align-items: center;
`; 