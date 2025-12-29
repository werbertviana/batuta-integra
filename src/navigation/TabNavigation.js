import React from 'react';
import { Image } from 'react-native';
import Home from '../pages/home/Home'
import Profile from '../pages/profile/Profile'
import Elos from '../pages/elos/Elos'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Awesome from 'react-native-vector-icons/FontAwesome5';


const EloIcon = require('../assets/icons/elo.png');

const Tab = createBottomTabNavigator();

function TabNavigation(){
  return(
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarActiveTintColor: '#000000',
          tabBarStyle: {
            height: 60,
            borderTopWidth: 1,
            borderTopColor: '#D2D3D5',
          },
          tabBarIconStyle: {
            flex: 1
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon:({color})=>(
              <Awesome 
              name="home" 
              color={color} 
              size={28}
              />
            ),
            }
          }  
        />    
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon:({color})=>(
              <Awesome 
              name="user-alt" 
              color={color} 
              size={25}
              />
            )
            }
          }         
        />
        <Tab.Screen
          name="Elos"
          component={Elos}
          options={{
            tabBarIcon:({color})=>(
              <Image
                source={EloIcon}
                style={{
                  width: 35,
                  height: 35,
                  tintColor: color,
                }}
              />
            )
            }
          }  
        />
      </Tab.Navigator>
  );
}

export default TabNavigation;