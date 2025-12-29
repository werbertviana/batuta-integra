import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import PautaHeader from './PautaHeader';
import { TouchableOpacity, FlatList } from 'react-native';


import { 
        Container, 
        SlideView,
        FlatView,
      } 
from './PautaStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao01/pauta/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao01/pauta/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao01/pauta/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao01/pauta/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao01/pauta/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao01/pauta/slide06.png'
import Slide07 from '../../../../assets/images/conteudo/licao01/pauta/slide07.png'
import Slide08 from '../../../../assets/images/conteudo/licao01/pauta/slide08.png'

//import slides estáticos
import staticSlides from '../../../../data/licao01/pauta.json'

//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';

//importando ícones
import Bonus2 from '../../../../assets/icons/bonus2.png'

function Pauta(){

  const allSlides = staticSlides.slides;
  const navigation = useNavigation(); 

  const Done = () => {
    navigation.navigate('AtivPauta')
  }

  const handleBonusPress = () => {
    navigation.navigate('BonusClave'); 
  };

  const renderFlatPauta01 = (item) => {
    if(item === "slide01_04.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380}}/>
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide04} style={{ height: 450, width: 380}}/>
        </FlatView>
      );
    }
  }

  const renderFlatPauta02 = (item) => {
    if(item === "slide05_08.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide05} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide06} style={{ height: 450, width: 380}}/>
          <FastImage resizeMode="contain" source={Slide07} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide08} style={{ height: 450, width: 380}}/>
        </FlatView>
      );
    }
  }

  const slideComponents = {
    "slide01_04.png": (
      <Container>
        <PautaHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatPauta01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>  
    ),
    "slide05_08.png": (
      <Container>
        <PautaHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatPauta02(items.item.image)}
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
        style={{ backgroundColor: '#FFF' }}
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

export default Pauta;