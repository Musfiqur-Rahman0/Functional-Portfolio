import { auth } from "@/firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLogedIn(true);
        setLoading(false);
      } else {
        setUser(null);
        setIsLogedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(user)
  return (
    <GlobalContext.Provider
      value={{
        setUser,
        user,
        isLogedIn,
        setIsLogedIn,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
