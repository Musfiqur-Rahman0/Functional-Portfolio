import { auth, db } from "@/firebase/firebase.init";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";



export const AuthContext =  createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [comments, setComments]  = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    
    const commentDataRef = collection(db, "comments")
    const getComments = async() => {
      try{
       setIsLoading(true)
          const commentData = await getDocs(commentDataRef);
          const data = commentData.docs.map((doc)=>  doc.data());
          setComments(data);
      }catch(err){
          console.error(err)
      }finally{
        setIsLoading(false)
      }
      
  }

  useEffect(()=> {  
    getComments();
       

    const unsubscribe =  onAuthStateChanged(auth, (user)=> {
      if(user){
        setUser(user)
      }
    })
    return () => unsubscribe()
    },[])


    

    // console.log(user, )
    return  (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLogedIn, 
            setIsLogedIn,
            isLoading,
            setIsLoading,
            comments
        }}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;