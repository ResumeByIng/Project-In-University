import { createContext, useContext, useState } from 'react';
import React from 'react';
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let [email, setEmail] = useState('');
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <UserContext.Provider value={{setEmail ,email ,setIsLoggedIn, isLoggedIn}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};