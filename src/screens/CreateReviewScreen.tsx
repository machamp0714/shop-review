import React, { FC, useEffect, useState, useContext } from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import firebase from 'firebase';

import { UserContext } from '../contexts/userContexts';

import IconButton from '../components/IconButton';
import TextArea from '../components/TextArea';
import StarInput from '../components/StartInput';
import Button from '../components/Button';

import { RootStackParamList } from '../services/navigation';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { createReviewRef } from '../lib/firebase';
import { pickImage } from '../lib/image-picker';
import { getExtension } from '../utils/file';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'CreateReview'>;
  route: RouteProp<RootStackParamList, 'CreateReview'>;
}

const CreateReviewScreen: FC<Props> = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>('');
  const [score, setScore] = useState<number>(3);
  const [imageUri, setImageUri] = useState<string>('');
  const { user } = useContext(UserContext);
  if (!user) throw new Error('no authenticate!');

  const onSubmit = async () => {
    const reviewRef = await createReviewRef(shop.id!);

    const ext = getExtension(imageUri);
    const storagePath = `reviews/${reviewRef.id}.${ext}`;

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
  }

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
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
        <IconButton name='camera' color='#ccc' onPress={onPickImage} />
        {!!imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
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
  },
  image: {
    width: 100,
    height: 100
  }
});

export default CreateReviewScreen;
