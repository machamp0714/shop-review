import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { getShops } from '../lib/firebase';
import { Shop } from '../services/models/shop';
import ShopReviewItem from '../components/ShopReviewItem';
import { HomeStackParamList } from '../navigation/HomeStackNavigator';

type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Home'>

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: Props) => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  }

  const onPressShop = () => {
    navigation.navigate('Shop');
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        key={'#'}
        renderItem={({ item }: { item: Shop }) => <ShopReviewItem shop={item} onPress={onPressShop} />}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
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

export default HomeScreen;
