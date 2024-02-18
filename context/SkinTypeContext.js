import React, { createContext, useContext, useState } from 'react';

const SkinTypeContext = createContext();

export const SkinTypeProvider = ({ children }) => {
  const [sharedSkinType, setSharedSkinType] = useState('');

  return (
    <SkinTypeContext.Provider value={{ sharedSkinType, setSharedSkinType }}>
      {children}
    </SkinTypeContext.Provider>
  );
};

export const useSkinTypeContext = () => useContext(SkinTypeContext);