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

export const addReview = async (shopId: string, review: Review) => {
  await firebase
    .firestore()
    .collection('shops')
    .doc(shopId)
    .collection('reviews')
    .add(review)
};
