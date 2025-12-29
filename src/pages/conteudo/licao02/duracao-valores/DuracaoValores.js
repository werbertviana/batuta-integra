import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import FastImage from 'react-native-fast-image';
import DuracaoValoresHeader from './DuracaoValoresHeader';
import Sound from 'react-native-sound';

import 
{ Container, 
  SlideView, 
  DivisorLine2, 
  FlatView,
  Div,
  DivisorLine,
  ImageSound,
  DivFinal
} 
from './DuracaoValoresStyles';

//importando imagens
import Slide01 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide01.png'
import Slide02 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide02.png'
import Slide03 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide03.png'
import Slide04 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide04.png'
import Slide05 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide05.png'
import Slide06 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide06.png'
import Slide07 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide07.png'
import Slide08 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide08.png'
import Slide09 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide09.png'
import Slide10 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide10.png'
import Slide11 from '../../../../assets/images/conteudo/licao02/duracao-valores/slide11.png'

//importando ícones
import Som from '../../../../assets/icons/sound.png'


//import botões do conteúdo
import { ConteudoNextButton, ConteudoDoneButton, ConteudoPrevButton, ConteudoSkipButton } from '../../../../components/buttons/conteudo/ConteudoButtons';

//import slides estáticos
import staticSlides from '../../../../data/licao02/duracaoValores.json'

function DuracaoValores(){

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

    if (music === 'semibreve') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/semibreve.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a Semibreve:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Semibreve terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Semibreve');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'minima') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/minima.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a Mínima:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Mínima terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Mínima');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'seminima') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/seminima.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a Seminima:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Seminima terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Seminima');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'colcheia') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/colcheia.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a colcheia:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Colcheia terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Colcheia');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'semicolcheia') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/semicolcheia.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a semicolcheia:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Semicolcheia terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Semicolcheia');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'fusa') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/fusa.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a Fusa:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Fusa terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a fusa');
            }
            setMusica(null); // Limpa a referência após terminar
          });
        }
      );
    }

    if (music === 'semifusa') {
      sound = new Sound(
        require('../../../../assets/sounds/licao02/duracao-valores/semifusa.mp3'),
        (error) => {
          if (error) {
            console.log('Erro ao carregar a Semifusa:', error);
            return;
          }
          sound.play((success) => {
            if (success) {
              console.log('Semifusa terminou de tocar');
            } else {
              console.log('Erro ao reproduzir a Semifusa');
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
    navigation.navigate('AtivDuracao')
  }

  const handleBonusPress = () => {
    navigation.navigate('BonusClave'); 
  };

  const renderFlatDuracao01 = (item) => {
    if(item === "slide01_03.png"){
      return(
        <FlatView style={{marginTop: 10}}>
          <FastImage resizeMode="contain" source={Slide01} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide02} style={{ height: 450, width: 380 }}/>
          <FastImage resizeMode="contain" source={Slide03} style={{ height: 450, width: 380 }}/>
        </FlatView>
      );
    }
  }

  const renderFlatDuracao02 = (item) => {
    if(item === "slide04_11.png"){
      return(
        <FlatView>
          {/* Observação */}
          <FastImage resizeMode="contain" source={Slide04} style={{ height: 380, width: 380}}/>
          <DivisorLine2 style={{marginTop: 20}}></DivisorLine2>
          {/* slide 04 */}
          <FastImage resizeMode="contain" source={Slide05} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("semibreve")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>          
          {/* slide 05 */}
          <FastImage resizeMode="contain" source={Slide06} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("minima")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>   
          {/* slide 06 */}
          <FastImage resizeMode="contain" source={Slide07} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("seminima")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>   
          {/* slide 07 */}
          <FastImage resizeMode="contain" source={Slide08} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("colcheia")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>   
          {/* slide 08 */}
          <FastImage resizeMode="contain" source={Slide09} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("semicolcheia")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>   
          {/* slide 09 */}
          <FastImage resizeMode="contain" source={Slide10} style={{ height: 380, width: 380}}/>
          <Div>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("fusa")}>
                <SafeAreaView>
                  <ImageSound source={Som}>
                  </ImageSound>
                </SafeAreaView>
              </TouchableOpacity>
            <DivisorLine/>
          </Div>   
          {/* slide 10 */}
          <FastImage resizeMode="contain" source={Slide11} style={{ height: 380, width: 380}}/>
          <DivFinal>
            <DivisorLine/>
              <TouchableOpacity onPress={() =>selected("semifusa")}>
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
        <DuracaoValoresHeader/>
        <SlideView>
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatDuracao01(items.item.image)}
            showsVerticalScrollIndicator={false}>
          </FlatList>
        </SlideView>
      </Container>  
    ),
    "slide04_11.png": (
      <Container>
        <DuracaoValoresHeader/>
        <SlideView> 
          <FlatList
            data={allSlides}
            keyExtractor={(items) => items.key}
            renderItem={(items) => renderFlatDuracao02(items.item.image)}
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

export default DuracaoValores;