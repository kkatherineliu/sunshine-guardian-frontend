import React, { createContext, useContext, useState } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setSharedLocation] = useState('');

  return (
    <LocationContext.Provider value={{ location, setSharedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

// Custom hook to use the location context
export const useLocationContext = () => useContext(LocationContext);