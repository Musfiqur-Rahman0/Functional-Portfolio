import { auth } from "@/firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import { GlobalContext } from "./GlobalContext";
// import { use } from "react";
// import { toast } from "sonner";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user && user.email ? user : null);
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
