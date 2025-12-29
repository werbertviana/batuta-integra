import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { HeaderContainer, TouchableHeader, ImageIcon, ImageTitle} from './FigurasNotasStyles';

//importando imagens
import Titulo from '../../../../assets/images/conteudo/licao02/figuras-notas/figuras-notas.png'
//importando ícones
import IconeX from  '../../../../assets/icons/x.png'

function FigurasNotasHeader(){
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

export default FigurasNotasHeader;