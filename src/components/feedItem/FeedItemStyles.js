import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const TouchableFeedItem = styled.TouchableOpacity`
    margin-top: 10px;
    align-items: center;
`;

export const ImageFeedIcon = styled(FastImage)`
    width: 105px;
    height: 105px;
    margin-bottom: 10px;
`;

export const TextFeedTitle = styled.Text`
    font-size: 28px;
    font-family: GothamCondensed-Medium;
`;

export const TitleView = styled.SafeAreaView`
    justify-content: 'center';
    align-items: 'center';
    border-radius: 8px;
    background-color: #FFFFFF;
    border-color: #D2D3D5;
    border-width: 2px;
    border-bottom-width: 4px;
    padding: 5px;
`;





