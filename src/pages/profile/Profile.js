import React from 'react';
import {View, Text} from 'react-native';
import { Background } from './ProfileStyles';
const Perfil = require('../../assets/images/login/perfil.png');

function Profile(){
  return(
    <Background resizeMode="cover" source={Perfil} />
  );
}

export default Profile;