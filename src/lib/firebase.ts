import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import Constants from 'expo-constants';

import { Shop } from '../services/models/shop';
import { User, initUser } from '../services/models/user';
import { Review } from '../services/models/review';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snap = await firebase
    .firestore()
    .collection('shops')
    .orderBy('score', 'desc')
    .get();
  const shops = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Shop);
  return shops;
}

export const getReviews = async (shopId: string) => {
  const snap = await firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .collection('reviews')
    .orderBy('createdAt', 'desc')
    .get()

  return snap
    .docs.map(doc => ({ id: doc.id, ...doc.data() } as Review));
}

export const signin = async () => {
  const userCredential = await firebase.auth().signInAnonymously();
  const { uid } = userCredential.user as firebase.User;
  const userDoc = await firebase.firestore().collection('users').doc(uid).get();
  if (!userDoc.exists) {
    await firebase.firestore().collection('users').doc(uid).set(initUser);
    return {
      id: uid,
      ...initUser,
    } as User;
  } else {
    return {
      id: uid,
      ...userDoc.data()
    } as User;
  }
};

export const updateUser = async (userId: string, params: any) => {
  await firebase.firestore().collection('users').doc(userId).update(params);
}

export const createReviewRef = async (shopId: string) => {
  return await firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .collection('reviews')
    .doc()
};

export const uploadImage = async (uri: string, path: string) => {
  // uriをblob形式に変換
  const localUri = await fetch(uri);
  const blob = await localUri.blob();
  // storageにupload
  const ref = firebase.storage().ref().child(path);

  let downloadUrl = '';
  try {
    await ref.put(blob);
    downloadUrl = await ref.getDownloadURL();
  } catch (error) {
    console.log(error);
  }
  return downloadUrl;
}
