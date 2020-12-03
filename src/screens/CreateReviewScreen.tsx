import React, { FC, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import IconButton from '../components/IconButton';

import { RootStackParamList } from '../services/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>;
  route: RouteProp<RootStackParamList, 'CreateReview'>;
}

const CreateReviewScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => <IconButton name='x' onPress={() => navigation.goBack()} />
    })
  }, [shop])

  return (
    <View style={styles.container}>
      <Text>Create Review</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreateReviewScreen;
