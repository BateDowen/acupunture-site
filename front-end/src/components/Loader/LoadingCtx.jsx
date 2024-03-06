import { createContext, useContext, useState } from "react";


const LoadingCtx = createContext();

export const useLoading = () => {
    return useContext(LoadingCtx);
};

export const LoadingProvider = ({ children }) => {
    const [loading,setLoading] = useState();

    const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoadingCtx.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoadingCtx.Provider>
  );
}