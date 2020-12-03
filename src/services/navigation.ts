import { Shop } from './models/shop';

export type RootStackParamList = {
  Home: undefined;
  Shop: { shop: Shop };
  User: undefined;
  CreateReview: { shop: Shop }
};
