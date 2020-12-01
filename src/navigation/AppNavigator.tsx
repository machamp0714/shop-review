import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeStackNavigator from './HomeStackNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator;
