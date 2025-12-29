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
    height: 73%;
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

export const DivisorLine2 = styled.SafeAreaView`
    width: 100%;
    height: 2px;
    background-color: #D2D3D5;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;  

export const NextView = styled.SafeAreaView`
    width: 100%;
    height: 92%;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #3CB1C7;
    border-bottom-width: 4px;
    border-color: #236A79;
    border-left-width: 0.005px;
    border-right-width: 0.005px;
`;

export const SkipView = styled.SafeAreaView`
    width: 100%;
    height: 92%;
    justify-content: center;
    align-items: 'center';
    border-radius: 12px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 1px;
    border-bottom-width: 4px;
    border-color: #D2D3D5;
`;

export const PrevView = styled.SafeAreaView`
    width: 100%;
    height: 92%;
    justify-content: center;
    align-items: 'center';
    border-radius: 12px;
    border-color: #D2D3D5;
    border-width: 1px;
    background-color: #FFFFFF;
    border-bottom-width: 4px;
    border-bottom-color: #D2D3D5;
`;

export const DoneView = styled.SafeAreaView`
    width: 100%;
    height: 92%;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border-bottom-width: 4px;
    border-left-width: 0.005px;
    border-right-width: 0.005px;
    border-color: #7A477C;
    background-color: #AF74B0; 
`;

export const BonusView = styled.SafeAreaView`
    padding: 8px;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    border-bottom-width: 4px;
    border-left-width: 0.005px;
    border-right-width: 0.005px;
    border-color: #DAA520;
    background-color: #FDC500;  
    border-bottom-color:  #DAA520;
`;

export const Text01 = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center ;
    color: white;
    font-size: 30px;
`;

export const Text02 = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center;
    color: black;
    font-size: 30px;   
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