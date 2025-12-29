import React from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import BonusClaveHeader from './BonusClaveHeader';

import 
{ Container, 
  NextView, 
  DoneView, 
  PrevView, 
  SkipView, 
  Text01, 
  Text02, 
  SlideView, 
  DivisorLine2, 
  SlideView2, 
  SlideView3,
  BonusView,
  FlatView
} 
from './BonusClaveStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao01/clave/bonus/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao01/clave/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao01/clave/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao01/clave/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao01/clave/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao01/clave/slide06.png'
import Slide07 from '../../../../assets/images/conteudo/licao01/clave/slide07.png'
import Slide08 from '../../../../assets/images/conteudo/licao01/clave/slide08.png'

//importando ícones
import Bonus from '../../../../assets/icons/bonus.png'

//import slides estáticos
import staticSlides from '../../../../data/licao01/bonusClave.json'

function BonusClave(){

  const allSlides = staticSlides.slides;

  const navigation = useNavigation(); 

  const Done = () => {
    navigation.navigate('AtivClave')
  }

  const nextButton = () => {
    return (
      <NextView>
        <Text01>
          PRÓXIMO
        </Text01>
      </NextView>
    );
  }

  const skipButton = () => {
    return (
      <SkipView>
        <Text02>
          PULAR
        </Text02>
      </SkipView>
    );
  }

  const prevButton = () => {
    return (
      <PrevView>
        <Text02>
          VOLTAR
        </Text02>
      </PrevView>
    );
  }

  const doneButton = () => {
    return (
      <DoneView>
        <Text01>
          PRATICAR
        </Text01>
      </DoneView>
    );
  }

  const renderFlatSol = (item) => {
    if(item === "slide03_04.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide04} style={{ height: 460, width: 390}}/>
        </FlatView>
      );
    }
  }

  const renderFlatFa = (item) => {
    if(item === "slide05_06.png"){
      return(
        <FlatView>
          <FastImage resizeMode="contain" source={Slide05} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide06} style={{ height: 450, width: 380 }}/>
        </FlatView>
      );
    }
  }

  const renderFlatDo = (item) => {
    if(item === "slide07_08.png"){
      return(
        // <FastImage resizeMode="contain" source={Slide03} style={{ backgroundColor: 'yellow'}}/>
        <FlatView>
          <FastImage resizeMode="contain" source={Slide07} style={{ height: 450, width: 380}}/>
          <FastImage resizeMode="contain" source={Slide08} style={{ height: 450, width: 380 }}/>
          <DivisorLine2></DivisorLine2>
          <SlideView3>
            {/* <Text >Teste</Text> */}
            <FastImage resizeMode="contain" source={Bonus} style={{ height: 90, width: 250}}/>
              <TouchableOpacity>
                <BonusView>
                <Text01>+ Bônus</Text01>
                </BonusView>
            </TouchableOpacity>
          </SlideView3>
        </FlatView>
      );
    }
  }


  const slideComponents = {
    "slide01.png": (
        <Container>
            <BonusClaveHeader/>
            <SlideView>
              <FastImage resizeMode="contain" source={Slide01} style={{ height: '100%', width: '90%'}}/>
            </SlideView>
        </Container>
    ),
    "slide02.png": (
        <Container>
            <BonusClaveHeader/>
            <SlideView>
              <FastImage resizeMode="contain" source={Slide02} style={{ height: '100%', width: '80%'}}/>
            </SlideView>
        </Container>
    ),
    "slide03_04.png": (
        <Container>
            <BonusClaveHeader/>
            <SlideView>
              <FlatList
                data={allSlides}
                keyExtractor={(items) => items.key}
                renderItem={(items) => renderFlatSol(items.item.image)}
                showsVerticalScrollIndicator={false}>
              </FlatList>
            </SlideView>
        </Container>
    ),
    "slide05_06.png": (
        <Container>
            <BonusClaveHeader/>
            <SlideView>
              <FlatList
                data={allSlides}
                keyExtractor={(items) => items.key}
                renderItem={(items) => renderFlatFa(items.item.image)}
                showsVerticalScrollIndicator={false}>
              </FlatList>
            </SlideView>
        </Container>
    ),
    "slide07_08.png": (
      <Container>
        <BonusClaveHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatDo(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>
    )
  };


  const renderSlides = ({ item }) => {
    return slideComponents[item.image] || null; 
  };

  // const renderFlatList = ({ item }) => {
  //   return (
  //     <Container>
  //       <FlatList
  //         data={allSlides}
  //         keyExtractor={(item) => item.key}
  //         renderItem={renderSlides}
  //         showsVerticalScrollIndicator={false}
  //       >
  //       </FlatList>
  //     </Container>
  //   ); 
  // };

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
        renderNextButton={nextButton}
        renderSkipButton={skipButton}
        renderDoneButton={doneButton}
        renderPrevButton={prevButton}
        onDone={Done}
    >
    </AppIntroSlider>
  );
}

export default BonusClave;