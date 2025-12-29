import "./src/shims/backHandler";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/StackNavigation';
import { AuthProvider } from './src/contexts/AuthContext';




function App(){
  return(
    <AuthProvider>
      <NavigationContainer>
      <Navigation></Navigation>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default App;