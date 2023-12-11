import React, { createContext, useState } from 'react';

// Create the context
const LoaderContext = createContext();

// Create a provider component
export const LoaderProvider = ({ children }) => {

    const [isLoading ,setIsLoading] = useState(false)

  // Your provider logic here, e.g., managing loading state
  return (
    <LoaderContext.Provider value={{isLoading}}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContext