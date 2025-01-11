// PageStateContext.js
import React, { useState, useContext}from 'react';

export const UserStateContext = React.createContext();

export const UserStateProvider = ({ children }) => {
  const [userState, setUserState] = useState(0);
  

  return (
    <UserStateContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserStateContext.Provider>
  );
};

