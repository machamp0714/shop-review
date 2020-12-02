import React, { FC } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Shop'>;
  route: RouteProp<RootStackParamList, 'Shop'>
}

const ShopScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  }
});

export default ShopScreen;
