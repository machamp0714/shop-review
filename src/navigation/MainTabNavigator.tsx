import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from './HomeStackNavigator';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator: FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeStackNavigator} />
      <Tab.Screen name='User' component={UserScreen} />
    </Tab.Navigator>
  )
}

export default MainTabNavigator;
