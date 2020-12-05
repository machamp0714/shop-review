import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { UserContext } from '../contexts/userContexts';
import MainTabNavigator from './MainTabNavigator';
import AuthScreen from '../screens/AuthScreen';

const AppNavigator = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <MainTabNavigator />}
    </NavigationContainer>
  )
}

export default AppNavigator;
