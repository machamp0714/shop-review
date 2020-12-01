import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}

export default AppNavigator;
