import { createContext, ReactNode, useContext } from 'react';

type MyUserContextProps = {
  children: ReactNode;
  userId: number;
}

const MyUserContext = createContext<number | null>(null);

export const MyUserContextProvider = ({ children, userId }: MyUserContextProps) => {
  return (
    <MyUserContext.Provider value={userId}>
      {/* {console.log('Provider value:', userId)} */}
      {children}
    </MyUserContext.Provider>
  );
};

export const useUser = () => useContext(MyUserContext);