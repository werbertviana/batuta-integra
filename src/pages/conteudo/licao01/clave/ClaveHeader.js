import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderContainer, TouchableHeader, ImageIcon, ImageTitle} from './ClaveStyles';

//importando imagens
import Titulo from '../../../../assets/images/conteudo/licao01/clave/clave.png'
//importando ícones
import IconeX from  '../../../../assets/icons/x.png'

function ClaveHeader(){
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

export default ClaveHeader;