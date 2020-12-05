import React, { useState }  from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { UserContext } from './src/contexts/userContexts';
import { User } from './src/services/models/user';

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }} >
      <AppNavigator />
    </UserContext.Provider>
  );
}
