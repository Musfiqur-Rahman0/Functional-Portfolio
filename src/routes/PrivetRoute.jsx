import { AuthContext } from '@/Context/AuthContext';
import React, { use } from 'react';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {

    const {user, isLoading} = use(AuthContext);


   
    if(!user ){
        return <Navigate to="/" />
    }

    return children;
};

export default PrivetRoute;