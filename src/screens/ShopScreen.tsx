import React, { FC, useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import ShopDetail from '../components/ShopDetail';
import FloatingActionButton from '../components/FloatingActionButton';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

import { getReviews } from '../lib/firebase';
import { Review } from '../services/models/review';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Shop'>;
  route: RouteProp<RootStackParamList, 'Shop'>
}

const ShopScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: shop.name })

    const getFirebaseReviews = async () => {
      const reviews = await getReviews(shop.id as string);
      setReviews(reviews);
    };
    getFirebaseReviews();
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <ShopDetail shop={shop} />
      <FloatingActionButton
        iconName='plus'
        onPress={() => navigation.navigate('CreateReview', {shop})}
      />
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
