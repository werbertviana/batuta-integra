import React, { useState, useEffect } from 'react';
import { SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import IntroHeader from './IntroHeader';
import Sound from 'react-native-sound';

import { 
        Container, 
        ImageSound, 
        Div, 
        DivisorLine, 
        SlideView,
        FlatView
} from './IntroStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao01/introducao/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao01/introducao/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao01/introducao/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao01/introducao/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao01/introducao/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao01/introducao/slide06.png'

//importando ícones
import Som from '../../../../assets/icons/sound.png'

//import slides estáticos
import staticSlides from '../../../../data/licao01/intro.json'

//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';



function Introducao(){

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

    if (music === 'melodia') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/introducao/melodia.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a melodia:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Melodia terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a melodia');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'harmonia') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/introducao/harmonia.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a harmonia:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Harmonia terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a harmonia');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'ritmo') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/introducao/ritmo.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar o ritmo:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Ritmo terminou de tocar');
            } else {
              console.log('Erro ao reproduzir o ritmo');
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
    navigation.navigate('AtivIntro')
  }


  const renderFlatIntro = (item) => {
    if(item === "slide02_03.png"){
      return(
        <FlatView>
          {/* slide 02 */}
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380 }}/>
          {/* slide 03 */}
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380 }}/>
        </FlatView>
      )
    }
  }

  const slideComponents = {
    "slide01.png": (
      <Container>
        <IntroHeader />
        <SlideView>
          <FastImage  resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }} />
        </SlideView>
      </Container>
    ),
    "slide02_03.png": (
      <Container>
        <IntroHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatIntro(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>          
        </SlideView>
      </Container>
    ),
    "slide04.png": (
      <Container>
        <IntroHeader />
        <FastImage resizeMode="contain" source={Slide04} style={{ height: 450, width: 380 }} />
        <Div>
          <DivisorLine/>
            <TouchableOpacity onPress={() =>selected("melodia")}>
              <SafeAreaView>
                <ImageSound source={Som}>
                </ImageSound>
              </SafeAreaView>
            </TouchableOpacity>
          <DivisorLine/>
        </Div>
      </Container>
    ),
    "slide05.png": (
      <Container>
        <IntroHeader />
        <FastImage resizeMode="contain" source={Slide05} style={{ height: 450, width: 380 }} />
        <Div>
          <DivisorLine/>
            <TouchableOpacity onPress={() =>selected("harmonia")}>
              <SafeAreaView>
                <ImageSound source={Som}>
                </ImageSound>
              </SafeAreaView>
            </TouchableOpacity>
          <DivisorLine/>
        </Div>
      </Container>
    ),
    "slide06.png": (
      <Container>
      <IntroHeader />
      <FastImage resizeMode="contain" source={Slide06} style={{ height: 450, width: 380 }} />
      <Div>
        <DivisorLine/>
          <TouchableOpacity onPress={() =>selected("ritmo")}>
            <SafeAreaView>
              <ImageSound source={Som}>
              </ImageSound>
            </SafeAreaView>
          </TouchableOpacity>
        <DivisorLine/>
      </Div>
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

export default Introducao;