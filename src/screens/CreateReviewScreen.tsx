import React, { FC, useEffect, useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../contexts/userContexts';

import IconButton from '../components/IconButton';
import TextArea from '../components/TextArea';
import StarInput from '../components/StartInput';
import Button from '../components/Button';

import { RootStackParamList } from '../services/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { addReview } from '../lib/firebase';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>;
  route: RouteProp<RootStackParamList, 'CreateReview'>;
}

const CreateReviewScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>('');
  const [score, setScore] = useState<number>(3);
  const { user } = useContext(UserContext);
  if (!user) throw new Error('no authenticate!');

  const onSubmit = async () => {
    const review = {
      user: {
        id: user.id!,
        name: user.name
      },
      shop: {
        id: shop.id!,
        name: shop.name
      },
      text: text,
      score: score,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now()
    }

    await addReview(shop.id!, review)
  }

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => <IconButton name='x' onPress={() => navigation.goBack()} />
    })
  }, [shop])

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeStar={(value) => setScore(value)} />
      <TextArea
        label='レビュー'
        value={text}
        placeholder='レビューを入力してください'
        onChangeText={(text) => setText(text)}
      />
      <View style={styles.photoContainer}>
        <IconButton name='camera' color='#ccc' onPress={() => {}} />
      </View>
      <Button text='投稿する' onPress={onSubmit} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photoContainer: {
    margin: 8
  }
});

export default CreateReviewScreen;
