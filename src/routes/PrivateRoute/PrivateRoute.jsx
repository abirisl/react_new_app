import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpiner from '../../components/LoadingSpiner';
import UserAuth from '../../hooks/UserAuth';

const PrivateRoute = ({children}) => {
    const {user,loading} = UserAuth();
    const location = useLocation()

    if(loading){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   
};

export default PrivateRoute;