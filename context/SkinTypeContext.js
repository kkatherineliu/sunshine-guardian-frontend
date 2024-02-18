import React, { createContext, useContext, useState } from 'react';

const SkinTypeContext = createContext();

export const SkinTypeProvider = ({ children }) => {
  const [skin_type, setSharedSkinType] = useState('acne-prone skin');

  return (
    <SkinTypeContext.Provider value={{ skin_type, setSharedSkinType }}>
      {children}
    </SkinTypeContext.Provider>
  );
};

export const useSkinTypeContext = () => useContext(SkinTypeContext);