import { createContext } from 'react';
import { User } from '../services/models/user';

type userContextValue = {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<userContextValue>({
  user: null,
  setUser: () => { }
});
