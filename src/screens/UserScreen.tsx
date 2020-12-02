import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '../services/navigation';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'User'>;
  route: RouteProp<RootStackParamList, 'User'>;
}

const UserScreen: FC<Props> = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserScreen;
