import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const AtivContainer = styled.SafeAreaView`
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    flex: 1;
`;

export const AlternativasContainer = styled.SafeAreaView`
    justify-content: center;
    align-items: center; 
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 15px;
`;

export const AlternativaContainer = styled.TouchableOpacity`
    align-items: center;
    width: 160px;
    height: 250px;
    border-radius: 12px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 4px;
    margin: 15px;
`;

export const AlternativaContainer2 = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100px;
    border-radius: 12px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 4px;
    margin: 10px;   
`;

// export const AlternativaContainer3 = styled.TouchableOpacity`
//     justify-content: center;
//     align-items: center;
//     background-color: yellow;
// `;

/**
 * Círculo usado nas questões com FIGURA (fica “grudado” no topo à esquerda)
 */
export const CircleContainer = styled.SafeAreaView`
    align-self: flex-start;
    align-items: center;
    position: absolute;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 4px;
    top: 8px;
    left: 8px;
    z-index: 2;
`;

/**
 * Círculo usado nas questões de TEXTO:
 * posição fixa dentro do card, independente do texto.
 */
export const CircleInline = styled.SafeAreaView`
    position: absolute;
    left: 6px;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 100px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 4px;
`;

export const ImageContainer = styled.SafeAreaView`
    width: 160px;
    height: 250px;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.SafeAreaView`
    justify-content: space-around;
    width: 100%;
    align-items: center; 
    flex-direction: row;
    margin-bottom: 20px;
`;

export const SkipView = styled.TouchableOpacity`
    width: 40%;
    height: 60px;
    justify-content: center;
    align-items: 'center';
    border-radius: 12px;
    border-color: #D2D3D5;
    background-color: #FFFFFF;
    border-width: 1px;
    border-bottom-width: 4px;
`;

export const NextView = styled.TouchableOpacity`
    width: 40%;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: #61BE4B;
    border-bottom-width: 4px;
    border-color: #38752B;
    border-left-width: 0.005px;
    border-right-width: 0.005px;
`;

export const NivelContainer = styled.SafeAreaView`
    margin-top: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
`;

export const DivisorLine = styled.SafeAreaView`
    width: 90%;
    height: 2px;
    background-color: #D2D3D5;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;  

export const ImageIcon = styled(FastImage)`
    position: absolute;
    width: 35px;
    height: 35px;
`;

export const Text02 = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center;
    color: black;
    font-size: 25px;   
`;

export const CircleText = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center;
    color: black;
    font-size: 16px;   
`;

export const Text01 = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center ;
    color: white;
    font-size: 25px;
`;

export const QuestaoContainer = styled.SafeAreaView`
    align-items: center;
`;

export const QuestaoText = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center ;
    color: black;
    font-size: 26px;
    margin-left: 10px;
    margin-right: 10px;
`;

export const AlternativaText = styled.Text`
    font-family: GothamCondensed-Medium;
    text-align: center;
    color: black;
    font-size: 20px;
    margin-left: 35px;   
`;

export const ImageAlternativa = styled(FastImage)`
    width: 115px;
    height: 190px;
`;

export const ImageAlternativa2 = styled(FastImage)`
    width: 280px;
    height: 100px; 
`;
