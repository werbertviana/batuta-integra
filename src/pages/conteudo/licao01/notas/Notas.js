import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import NotasHeader from './NotasHeader';
import Sound from 'react-native-sound';

import { 
  Container, 
  ImageSound, 
  Div, 
  DivisorLine,
  SlideView,
  FlatView,
  DivFinal
} 
from './NotasStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao01/notas/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao01/notas/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao01/notas/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao01/notas/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao01/notas/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao01/notas/slide06.png'
import Slide07 from '../../../../assets/images/conteudo/licao01/notas/slide07.png'
import Slide08 from '../../../../assets/images/conteudo/licao01/notas/slide08.png'
import Slide09 from '../../../../assets/images/conteudo/licao01/notas/slide09.png'
import Slide10 from '../../../../assets/images/conteudo/licao01/notas/slide10.png'
import Slide11 from '../../../../assets/images/conteudo/licao01/notas/slide11.png'


//importando ícones
import Som from '../../../../assets/icons/sound.png'

//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';


//import slides estáticos
import staticSlides from '../../../../data/licao01/notas.json'

function Notas(){

  const allSlides = staticSlides.slides;
  const [musica, setMusica] = useState(null);
  const navigation = useNavigation(); 

  const handleBonusPress = () => {
    navigation.navigate('BonusClave'); 
  };

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

    if (music === 'do') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/do.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Dó:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Dó terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Dó');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 're') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/re.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Ré:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Ré terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Ré');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'mi') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/mi.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Mi:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Mi terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Mi');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'fa') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/fa.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Fá:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Fá terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Fá');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'sol') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/sol.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Sol:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Sol terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Sol');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'la') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/la.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Lá:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Lá terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Lá');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'si') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/si.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a nota Si:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Nota Si terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a nota Si');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'escala') {
      sound = new Sound(
        require('../../../../assets/sounds/licao01/notas/escala.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a escala:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Escala terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a escala');
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
    navigation.navigate('AtivNotas')
  }

  
  const renderFlatNotas01 = (item) => {
    if(item === "slide01_03.png"){
      return(
        <FlatView>
          {/* slide 01 */}
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }}/>
          {/* slide 02 */}
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380 }}/>
          {/* slide 03 */}
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380 }}/>
        </FlatView>
      )
    }
  }

  const renderFlatNotas02 = (item) => {
    if(item === "slide04_11.png"){
      return(
        <FlatView>
          {/* slide 04 */}
          <FastImage resizeMode="contain" source={Slide04} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("do")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 05 */}
          <FastImage resizeMode="contain" source={Slide05} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("re")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 06 */}
          <FastImage resizeMode="contain" source={Slide06} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("mi")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 07 */}
          <FastImage resizeMode="contain" source={Slide07} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("fa")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 08 */}
          <FastImage resizeMode="contain" source={Slide08} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("sol")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 09 */}
          <FastImage resizeMode="contain" source={Slide09} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("la")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 10 */}
          <FastImage resizeMode="contain" source={Slide10} style={{ height: 380, width: 380 }}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("si")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>
          {/* slide 11 */}          
          <FastImage resizeMode="contain" source={Slide11} style={{ height: 300, width: 380 }}/>
          <DivFinal>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("escala")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </DivFinal>
        </FlatView>
      );
    }
  }

  const slideComponents = {
    "slide01_03.png": (
      <Container>
        <NotasHeader />
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatNotas01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>          
        </SlideView>
      </Container>
    ),
    "slide04_11.png": (
      <Container>
        <NotasHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatNotas02(items.item.image)}
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

export default Notas;