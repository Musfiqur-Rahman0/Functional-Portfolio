import { AuthContext } from '@/Context/AuthContext';
import { auth, googleProvider } from '@/firebase/firebase.init';
import { signInWithPopup, signOut } from 'firebase/auth';
import React, { useContext } from 'react';

const useAuth = () => {
    const {setUser} = useContext(AuthContext)
    const login  =async () => {
        try{
            const userCred = await signInWithPopup(auth, googleProvider);
        setUser(userCred.user)
        }catch(error){
            console.error(error.message)
        }
    }
    const logout =async () => {
        try{
        await signOut();
        setUser(null)
        }catch(error){
            console.error(error.message)
        }
    }


    return {login, logout}
};

export default useAuth;