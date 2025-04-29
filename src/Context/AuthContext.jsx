import { db } from "@/firebase/firebase.init";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";



export const AuthContext =  createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState();
    const [isLogedIn, setIsLogedIn] = useState(false)
    const [comments, setComments]  = useState({})
    
    
    const commentDataRef = collection(db, "comments")

    

      useEffect(()=> {
        const getComments = async() => {
            try{
                const commentData = await getDocs(commentDataRef);
              const data = commentData.docs.map((doc)=>  doc.data())
                setComments(data)
            }catch(err){
                console.error(err)
            }
        }

        return () => getComments()

      },[])
    

    return  (
        <AuthContext.Provider value={{
            user,
            setUser,
            isLogedIn, 
            setIsLogedIn
,            comments
        }}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;