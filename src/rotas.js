import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './telas/SplashScreen';
import Onboarding from './telas/Onboarding';
import Principal from './telas/Principal';
import Detalhes from './telas/Detalhes';

const Tab = createNativeStackNavigator();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}/>
        <Tab.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Detalhes" component={Detalhes}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;
