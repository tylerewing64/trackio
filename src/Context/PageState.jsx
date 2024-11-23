// PageStateContext.js
import React, { useState, useContext}from 'react';

export const PageStateContext = React.createContext();

export const PageStateProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <PageStateContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageStateContext.Provider>
  );
};

