import React, { FC, useState, useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import ShopDetail from '../components/ShopDetail';
import FloatingActionButton from '../components/FloatingActionButton';
import ReviewItem from '../components/ReviewItem';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

import { getReviews } from '../lib/firebase';
import { Review } from '../services/models/review';
import { ReviewsContext } from '../contexts/reviewsContext';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Shop'>;
  route: RouteProp<RootStackParamList, 'Shop'>
}

const ShopScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const { reviews, setReviews } = useContext(ReviewsContext);

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
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id!}
      />
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
