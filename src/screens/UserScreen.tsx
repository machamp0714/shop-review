import React, { FC, useState, useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { UserContext } from '../contexts/userContexts';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/navigation';

import Form from '../components/Form';
import Button from '../components/Button';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'User'>;
  route: RouteProp<RootStackParamList, 'User'>;
}

const UserScreen: FC<Props> = ({ navigation, route }) => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState<string>(user!.name);

  return (
    <SafeAreaView style={styles.container}>
      <Form onChangeText={(text) => setName(text)} value={name} label='名前' />
      <Button text='保存する' onPress={() => {}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default UserScreen;
