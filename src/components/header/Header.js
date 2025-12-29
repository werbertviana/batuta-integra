import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/AuthContext';

import {
  HeaderContainer,
  LifeImage,
  LogoImage,
  BatutasImage,
  XpImage,
  BatutasContainer,
  XpContainer,
  LifeContainer,
  BatutaText,
  XpText,
  LifeText,
  LogoutButton,
  LogoutIcon,
} from './HeaderStyles';

import Logo from '../../assets/icons/logo.png';
import Life from '../../assets/icons/life.png';
import Batutas from '../../assets/icons/batutas.png';
import Xp from '../../assets/icons/xp.png';
import Logout from '../../assets/icons/logout.png'; // 👈 ícone local

const Header = ({ xpPoints = 0, batutaPoints = 0, lifePoints = 2 }) => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout(); // limpa contexto
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <HeaderContainer>
      <LogoImage source={Logo} />

      <BatutasContainer>
        <BatutasImage source={Batutas} />
        <BatutaText>{batutaPoints}</BatutaText>
      </BatutasContainer>

      <XpContainer>
        <XpImage source={Xp} />
        <XpText>{xpPoints}</XpText>
      </XpContainer>

      <LifeContainer>
        <LifeImage source={Life} />
        <LifeText>{lifePoints}</LifeText>
      </LifeContainer>

      {/* 🔓 LOGOUT */}
      <LogoutButton onPress={handleLogout}>
        <LogoutIcon resizeMode={"contain"} source={Logout} />
      </LogoutButton>
    </HeaderContainer>
  );
};

export default Header;
