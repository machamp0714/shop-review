import React, { FC, useState, useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../contexts/userContexts';
import { updateUser } from '../lib/firebase';

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
  const { user, setUser } = useContext(UserContext);
  if (!user) throw new Error('user not authentication!');

  const [name, setName] = useState<string>(user.name);

  const onSubmit = async () => {
    const updatedAt = firebase.firestore.Timestamp.now();
    await updateUser(user.id!, { name, updatedAt }) // Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
    setUser({...user, name, updatedAt})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Form onChangeText={(text) => setName(text)} value={name} label='名前' />
      <Button text='保存する' onPress={onSubmit} />
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
