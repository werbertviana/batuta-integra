import React from 'react';
import {
  ModalContainer,
  ContentView,
  PracticeView,
  ContentText,
  PracticeText,
  XPText,
  IconImage,
} from './ModalItemStyles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// ATENÇÃO AQUI: caminhos corrigidos para as imagens
const iconMap = {
  Introdução: require('../../assets/icons/introducao.png'),
  'Notas Musicais': require('../../assets/icons/notas.png'),
  'Pauta Musical': require('../../assets/icons/pauta.png'),
  'Clave Musical': require('../../assets/icons/clave.png'),
  'Figuras de Notas': require('../../assets/icons/figuras_notas.png'),
  'Figuras de Pausas': require('../../assets/icons/pausas.png'),
  'Duração dos Valores': require('../../assets/icons/valores.png'),
  'Compasso Musical': require('../../assets/icons/compasso.png'),
};

const getIcon = (title) => {
  return iconMap[title];
};

function ModalItem({ onClose, title, practiceRoute }) {
  const navigation = useNavigation();

  const handleContentPress = () => {
    onClose(); // fecha o modal antes de navegar
    // conteúdo continua navegando pelo título (rotas de conteúdo)
    navigation.navigate(title);
  };

  const handlePracticePress = () => {
    onClose();

    // 1º tenta usar a rota vinda do JSON (mais profissional)
    if (practiceRoute) {
      navigation.navigate(practiceRoute);
      return;
    }

    // 2º fallback pra lógica antiga por título (compatibilidade)
    if (title === 'Introdução') {
      navigation.navigate('AtivIntro');
    }
    if (title === 'Pauta Musical') {
      navigation.navigate('AtivPauta');
    }
    if (title === 'Clave Musical') {
      navigation.navigate('AtivClave');
    }
    if (title === 'Notas Musicais') {
      navigation.navigate('AtivNotas');
    }
  };

  return (
    <ModalContainer>
      <IconImage source={getIcon(title)} resizeMode="contain" />

      <TouchableOpacity onPress={handleContentPress}>
        <ContentView>
          <ContentText>CONTEÚDO</ContentText>
        </ContentView>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePracticePress}>
        <PracticeView>
          <PracticeText>
            PRATICAR + <XPText>XP</XPText>
          </PracticeText>
        </PracticeView>
      </TouchableOpacity>
    </ModalContainer>
  );
}

export default ModalItem;
