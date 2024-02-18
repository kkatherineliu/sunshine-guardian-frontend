import React, { createContext, useContext, useState } from 'react';

const FitzContext = createContext();

export const SkinTypeProvider = ({ children }) => {
  const [sharedFitz, setSharedFitz] = useState('');

  return (
    <FitzContext.Provider value={{ sharedFitz, setSharedFitz }}>
      {children}
    </FitzContext.Provider>
  );
};

export const useFitzContext = () => useContext(FitzContext);