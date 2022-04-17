import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Checkout from '../../Checkout/Checkout' ;

const RequireAuth = ({children}) => {
        const [user, loading] = useAuthState(auth);
        console.log('user' , user) ;
        const location = useLocation() ;

        if(loading){
                return <Checkout></Checkout>
        }

        if(!user){
                return <Navigate to="/login" state={{ from: location }} replace />;
        }
        return children ;
};

export default RequireAuth;