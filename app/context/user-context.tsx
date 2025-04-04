'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

type UserContextType = {
  userId: number;
  setUserId: (id: number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function MyUserContextProvider({ children, initialId }: { children: ReactNode, initialId?: number }) {
  const [userId, setUserId] = useState<number>(initialId || 0);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  console.log(context);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a MyUserContextProvider');
  }
  return context;
}