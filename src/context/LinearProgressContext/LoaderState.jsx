import React, { useState } from "react";
import LoaderContext from "./LoaderContext.jsx";

const LoaderState = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoaders = (value) => {
    setIsLoading(value);
  };

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        handleLoaders,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderState;
