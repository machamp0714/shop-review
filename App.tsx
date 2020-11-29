import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from './firebase-config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

type Shop = {
  name: string;
  place: string;
};

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snap = await firebase.firestore().collection('shops').get();
    const shops = snap.docs.map(doc => doc.data() as Shop);
    setShops(shops);
  }

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      {shopItems}
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
