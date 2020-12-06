import firebase from 'firebase';

type UserRef = {
  id: string;
  name: string;
}

type ShopRef = {
  id?: string;
  name: string;
}

export type Review = {
  id?: string;
  text: string;
  score: number;
  user: UserRef;
  shop: ShopRef;
  imageUrl: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};
