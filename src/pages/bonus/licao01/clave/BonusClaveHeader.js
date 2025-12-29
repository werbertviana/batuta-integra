import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderContainer, TouchableHeader, ImageIcon, ImageTitle} from './BonusClaveStyles';

//importando imagens
import Titulo from '../../../../assets/icons/bonus_clave.png'
//importando ícones
import IconeX from  '../../../../assets/icons/x.png'

function BonusHeader(){
    const navigation = useNavigation(); 

    const close = () => {
        navigation.goBack()
      }

    return(
        <HeaderContainer>
            <TouchableHeader onPress={close}>
                <ImageIcon source={IconeX}/>
            </TouchableHeader>
            <ImageTitle resizeMode="contain" source={Titulo}/>
        </HeaderContainer>
    );
}

export default BonusHeader;