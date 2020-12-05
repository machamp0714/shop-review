import React, { FC, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  Text
} from 'react-native';

import { signin } from '../lib/firebase';

const AuthScreen: FC = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await signin();
      console.log(user);
    }
    fetchUser();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size='large' />
      <Text>ログイン中です...</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 16,
    fontSize: 12,
    color: "#888",
  },
});

export default AuthScreen;
