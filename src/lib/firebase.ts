import * as firebase from 'firebase';
import 'firebase/firestore';

import { firebaseConfig } from '../../firebase-config';
import { Shop } from '../services/models/shop';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const getShops = async () => {
  const snap = await firebase.firestore().collection('shops').get();
  const shops = snap.docs.map(doc => doc.data() as Shop);
  return shops;
}
