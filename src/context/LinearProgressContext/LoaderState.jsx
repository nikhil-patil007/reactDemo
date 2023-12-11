import React, { useState } from 'react'
import LoaderContext from './LoaderContext'

const LoaderState = (props) => {
  const [isLoading,setIsLoading] = useState(false);

  const handleLoaders = (value) =>{
    setIsLoading(value);
  };

  return (
    <LoaderContext.Provider value={{
      isLoading,
      handleLoaders,
    }}>
      {props.children}
    </LoaderContext.Provider>
  )
}

export default LoaderState
