import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase.init";
import { createContext, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { use } from "react";
import { toast } from "sonner";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);

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
      toast.success("Successfully added the comment")
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
        setComments,
        setCommentsData,
        getComments,
        commentsLoading,
        setCommentsLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

  // const AuthProvider = ({ children }) => {
  //   const [user, setUser] = useState(null);
  //   const [isLogedIn, setIsLogedIn] = useState(false);
  //   const [comments, setComments] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const commentDataRef = collection(db, "comments");
  //   const getComments = async () => {
  //     try {
  //       setIsLoading(true);
  //       const commentData = await getDocs(commentDataRef);
  //       const data = commentData.docs.map((doc) => doc.data());
  //       setComments(data);
  //     } catch (err) {
  //       console.error(err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  // };
};
export default AuthProvider;
