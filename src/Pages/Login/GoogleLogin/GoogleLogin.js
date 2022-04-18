import React from 'react';
import logo from '../../../images/Google/google.png' ;
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init' ;
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
 const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
 const navigate = useNavigate() ;
let errorMessage ;

// showing error message
 if (error) { 
       errorMessage =   
        <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div> 
      }

      if(user){
              navigate('/home') ;
      }  
        return (
               <div>
                <div className='d-flex align-items-center'>
                      <div style={{height: '1.2px'}} className='bg-secondary w-50'></div>
                      <p className='mt-2'>or</p>
                      <div style={{height: '1.2px'}} className='bg-secondary w-50'></div>
                </div>
                {errorMessage}

                <div>
                        <button
                                onClick={() => signInWithGoogle()}
                        className='btn btn-success w-50 d-block mx-auto'>
                               <img style={{width: '32px'}} src={logo} alt="" />
                               <span className='px-2'> Google Sign In</span> </button>
                </div>
               
               </div>

        );
};

export default GoogleLogin;