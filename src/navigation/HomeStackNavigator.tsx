import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ShopScreen from '../screens/ShopScreen';

import { RootStackParamList } from '../services/navigation';

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Shop"
        component={ShopScreen}

      />
    </Stack.Navigator>
  )
}

export default HomeScreenNavigator;
