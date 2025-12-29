import React from 'react';
import {View, Text} from 'react-native';
import { Background } from './ElosStyles';
const ElosBg = require('../../assets/images/login/elos-background.png');

function Elos(){
  return(
   <Background resizeMode="cover" source={ElosBg} />
  );
}

export default Elos;