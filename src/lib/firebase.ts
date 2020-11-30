import * as firebase from 'firebase';
import 'firebase/firestore';
import Constants from 'expo-constants';

import { Shop } from '../services/models/shop';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getShops = async () => {
  const snap = await firebase
    .firestore()
    .collection('shops')
    .orderBy('score', 'desc')
    .get();
    const shops = snap.docs.map(doc => doc.data() as Shop);
    return shops;
}
