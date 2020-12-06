import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import IconButton from '../components/IconButton';
import TextArea from '../components/TextArea';

import { RootStackParamList } from '../services/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>;
  route: RouteProp<RootStackParamList, 'CreateReview'>;
}

const CreateReviewScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>('');

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => <IconButton name='x' onPress={() => navigation.goBack()} />
    })
  }, [shop])

  return (
    <View style={styles.container}>
      <TextArea
        label='レビュー'
        value={text}
        placeholder='レビューを入力してください'
        onChangeText={(text) => setText(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CreateReviewScreen;
