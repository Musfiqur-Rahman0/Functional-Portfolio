import { db } from "@/firebase/firebase.init";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";



export const AuthContext =  createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [comment, setComment]  = useState({})
    
    
    const commentDataRef = collection(db, "comments")

    

      useEffect(()=> {
        const getComments = async() => {
            try{
                const commentData = await getDocs(commentDataRef);
              const data = commentData.docs.map((doc)=>  doc.data())
                setComment(data)
            }catch(err){
                console.error(err)
            }
        }

        return () => getComments()

      },[])
     
  
      console.log(comment)
    

    return  (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLogedIn, 
            setIsLogedIn
        }}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;