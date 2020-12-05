import firebase from 'firebase';

export type User = {
  id?: string;
  name: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
};

export const initUser: User = {
  name: '',
  updatedAt: firebase.firestore.Timestamp.now(),
  createdAt: firebase.firestore.Timestamp.now()
};
