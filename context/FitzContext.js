import React, { createContext, useContext, useState } from 'react';

const FitzContext = createContext();

export const FitzProvider = ({ children }) => {
  const [fitzpatrick, setSharedFitz] = useState('Type 1');

  return (
    <FitzContext.Provider value={{ fitzpatrick, setSharedFitz }}>
      {children}
    </FitzContext.Provider>
  );
};

export const useFitzContext = () => useContext(FitzContext);