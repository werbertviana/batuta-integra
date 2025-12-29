import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, SafeAreaView , Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import CompassoHeader from './CompassoHeader';
import Sound from 'react-native-sound';

import 
{ Container, 
  SlideView, 
  FlatView,
  Div,
  DivisorLine,
  ImageSound
} 
from './CompassoStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao02/compasso/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao02/compasso/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao02/compasso/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao02/compasso/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao02/compasso/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao02/compasso/slide06.png'
import Slide07 from '../../../../assets/images/conteudo/licao02/compasso/slide07.png'
import Slide08 from '../../../../assets/images/conteudo/licao02/compasso/slide08.png'


//importando ícones
import Som from '../../../../assets/icons/sound.png'


//import slides estáticos
import staticSlides from '../../../../data/licao02/compasso.json'

//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';

function Compasso(){

  const allSlides = staticSlides.slides;
  const [musica, setMusica] = useState(null);
  
  const navigation = useNavigation(); 

  const selected = (music) => {
    if (musica) {
      // Se já houver uma música tocando, pare e libere os recursos
      musica.stop(() => {
      musica.release(); // Libera a memória ocupada pela música
      setMusica(null); // Remove a referência da música
      });
    } else {
      // Se não houver música, inicie a reprodução
      PlaySound(music);
    }
  };

  const PlaySound = (music) => {
    Sound.setCategory('Playback');
    let sound = null;

    if (music === 'pretinha') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/compasso/pretinha.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar Pretinha:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Pretinha terminou de tocar');
            } else {
              console.log('Erro ao reproduzir Pretinha');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'metronomo') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/compasso/metronomo.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar metronomo:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('metronomo terminou de tocar');
            } else {
              console.log('Erro ao reproduzir metronomo');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }
    setMusica(sound); // Salva a instância do som atual no estado
  };

    useEffect(() => {
      return () => {
        if (musica) {
          musica.stop(() => {
            musica.release();
          });
        }
      };
    }, [musica]);

  const Done = () => {
    navigation.navigate('AtivCompasso')
  }

   const renderFlatCompasso01 = (item) => {
    if(item === "slide01_03.png"){
      return(
        <FlatView style={{marginTop: 10}}>
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("pretinha")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>                    
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("metronomo")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>            
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380, marginBottom: 15 }}/>
        </FlatView>
      );
    }
  }

  const renderFlatCompasso02 = (item) => {
    if(item === "slide04_08.png"){
      return(
        <FlatView>
            <FastImage resizeMode="contain" source={Slide04} style={{ height: 450, width: 380 }}/> 
            <FastImage resizeMode="contain" source={Slide05} style={{ height: 450, width: 380 }}/>    
            <FastImage resizeMode="contain" source={Slide06} style={{ marginTop: 10, height: 450, width: 380 }}/> 
            <FastImage resizeMode="contain" source={Slide07} style={{ height: 450, width: 380 }}/>       
            <FastImage resizeMode="contain" source={Slide08} style={{ height: 100, width: 380, marginBottom: 30}}/>             
        </FlatView>
      );
    }
  }

  const slideComponents = {
    "slide01_03.png": (
      <Container>
        <CompassoHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatCompasso01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>  
    ),
    "slide04_08.png": (
      <Container>
        <CompassoHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatCompasso02(items.item.image)}
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

export default Compasso;