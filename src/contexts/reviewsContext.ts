import { createContext } from 'react';
import { Review } from '../services/models/review';

type ReviewsContextValue = {
  reviews: Review[];
  setReviews: (reviews: Review[]) => void;
};

export const ReviewsContext = createContext<ReviewsContextValue>({
  reviews: [],
  setReviews: () => { }
});
