import React, { createContext, useContext, useState } from 'react';

const FitzContext = createContext();

export const SkinTypeProvider = ({ children }) => {
  const [fitzpatrick, setSharedFitz] = useState('');

  return (
    <FitzContext.Provider value={{ fitzpatrick, setSharedFitz }}>
      {children}
    </FitzContext.Provider>
  );
};

export const useFitzContext = () => useContext(FitzContext);