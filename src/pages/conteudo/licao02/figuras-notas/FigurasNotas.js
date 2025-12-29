import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import FigurasNotasHeader from './FigurasNotasHeader';

import 
{ Container, 
  SlideView, 
  FlatView
} 
from './FigurasNotasStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao02/figuras-notas/slide06.png'


//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';


//import slides estáticos
import staticSlides from '../../../../data/licao02/figurasNotas.json'

function FigurasNotas(){

  const allSlides = staticSlides.slides;

  const navigation = useNavigation(); 

  const Done = () => {
    navigation.navigate('AtivFigNotas')
  }

  
  const handleBonusPress = () => {
    navigation.navigate('BonusClave'); 
  };

  const renderFlatFigurasNotas01 = (item) => {
    if(item === "slide01_05.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 380, width: 380}}/>
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380}}/>
          <FastImage resizeMode="contain" source={Slide04} style={{ marginTop: 10, height: 450, width: 380}}/>
          {/* Observação */}
          <FastImage resizeMode="contain" source={Slide05} style={{ marginTop: 10, height: 180, width: 360}}/>
        </FlatView>
      );
    }
  }

  const renderFlatFigurasNotas02 = (item) => {
    if(item === "slide06.png"){
      return(
        <FlatView style={{marginTop: 10}}>
          <FastImage resizeMode="contain" source={Slide06} style={{ height: 450, width: 380}}/>
        </FlatView>
      );
    }
  }

  const slideComponents = {
    "slide01_05.png": (
      <Container>
        <FigurasNotasHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatFigurasNotas01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>  
    ),
    "slide06.png": (
      <Container>
        <FigurasNotasHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatFigurasNotas02(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>
    )
  };

  const renderSlides = ({ item }) => {
    return slideComponents[item.image] || null; 
  };

  return (
    <AppIntroSlider
        renderItem={renderSlides}
        data={allSlides}
        activeDotStyle={{
            marginTop: '6%',
            backgroundColor: '#96989A'
        }}
        dotStyle={{
            marginTop: '6%',
            backgroundColor: '#D2D3D5'
        }}
        showSkipButton={true}
        showPrevButton={true}
        bottomButton={true}
        renderNextButton={ConteudoNextButton}
        renderSkipButton={ConteudoSkipButton}
        renderDoneButton={ConteudoDoneButton}
        renderPrevButton={ConteudoPrevButton}
        onDone={Done}
    >
    </AppIntroSlider>
  );
}

export default FigurasNotas;