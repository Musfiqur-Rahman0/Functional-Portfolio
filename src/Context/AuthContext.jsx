import { db } from "@/firebase/firebase.init";
import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

import { createContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { use } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);
  const { setLoading } = use(GlobalContext);

  const commentDataRef = collection(db, "comments");

  const getComments = async () => {
    try {
      const commentData = await getDocs(commentDataRef);
      commentData.docs.map((doc) => doc.data());
    } catch (err) {
      console.error(err);
    }
  };

  const setCommentsData = async (userComment) => {
    try {
      await addDoc(commentDataRef, userComment);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const unSubscribe = onSnapshot(commentDataRef, (snapshot) => {
      const newComments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(newComments);
      setCommentsLoading(false);
    });
    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        comments,
        setCommentsData,
        commentsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
