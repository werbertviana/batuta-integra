import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import FigurasPausasHeader from './FigurasPausasHeader';

import 
{ Container, 
  SlideView, 
  FlatView
} 
from './FigurasPausasStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao02/figuras-pausas/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao02/figuras-pausas/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao02/figuras-pausas/slide03.png'

//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';

//import slides estáticos
import staticSlides from '../../../../data/licao02/figurasPausas.json'

function FigurasPausas(){

  const allSlides = staticSlides.slides;

  const navigation = useNavigation(); 

  const Done = () => {
    navigation.navigate('AtivFigPausas')
  }

  const handleBonusPress = () => {
    navigation.navigate('BonusClave'); 
  };

  const renderFlatFigurasPausas01 = (item) => {
    if(item === "slide01_02.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380}}/>
        </FlatView>
      );
    }
  }

  const renderFlatFigurasPausas02 = (item) => {
    if(item === "slide03.png"){
      return(
        <FlatView style={{marginTop: 10}}>
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380}}/> 
        </FlatView>
      );
    }
  }

  const slideComponents = {
    "slide01_02.png": (
      <Container>
        <FigurasPausasHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatFigurasPausas01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>  
    ),
    "slide03.png": (
      <Container>
        <FigurasPausasHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatFigurasPausas02(items.item.image)}
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

export default FigurasPausas;