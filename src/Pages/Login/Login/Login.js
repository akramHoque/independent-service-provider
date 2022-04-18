
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
        const emailRef = useRef('');
        const passwordRef = useRef('');
        const navigate = useNavigate() ;
        const location = useLocation() ;
        let from = location.state?.from?.pathname || "/";
        let errorMessage;
    

        const [
                signInWithEmailAndPassword,
                user,
                loading,
                error,
              ] = useSignInWithEmailAndPassword(auth);

  

              if (user) {
                navigate(from, { replace: true });
            }

            // showing error
            if (error) {
                errorMessage = <p className='text-danger'>Error: {error?.message}</p>
            }

            // reset password
            const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
                auth
              );
        
          const resetPassword = async() =>{
                const email = emailRef.current.value;
                await sendPasswordResetEmail(email);
                toast('Sent email');
          }

        const navigateToRegister = event => {
                navigate('/register')
        }

        // handle form with email and password

        const hanldeSubmit = event =>{
                event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password) ;
        signInWithEmailAndPassword(email, password);
        }

        
        return (

<div className='container w-50 mx-auto py-5'>
<h2 className='text-success text-center mt-3'>Please Login</h2> 
<Form onSubmit={ hanldeSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Email address</Form.Label>
         <Form.Control  ref = {emailRef} type="email" placeholder="Enter email" required/>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control ref = {passwordRef} type="password" placeholder="Password" required />
         </Form.Group>
         <Button className = 'mb-3' variant="success" type="submit">
            Login
         </Button>
</Form>   
        {errorMessage}

<p>New to Here? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateToRegister}>Please Register</Link> </p>
<p>Forget password? <button  className=' btn btn-link text-success pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p> 
                <GoogleLogin></GoogleLogin>

                <ToastContainer />

 </div>
        );
};

export default Login;