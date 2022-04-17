import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
        const navigate = useNavigate() ;

        const [
                createUserWithEmailAndPassword,
                user,
                loading,
                error,
              ] = useCreateUserWithEmailAndPassword(auth);


        const navigateToLogin = event => {
                navigate('/login') ;
        }

         if(user){
                 navigate('/home') ;
         }

        const handleRegister = event => {
                event.preventDefault() ;
                const name = event.target.name.value;
                const email = event.target.email.value;
                console.log(email) ;
                const password = event.target.password.value;
                console.log(password);
                createUserWithEmailAndPassword(email, password) ;
        }
        return (
<div className='container mx-auto w-50 '>
 <h2 className='text-center mt-3 text-success'>Please Register Here!!</h2> 
                       
<Form onSubmit={handleRegister}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name</Form.Label>
    <Form.Control type="text"  name="name" placeholder="Your Name"  />
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="success" type="submit">
    Register
  </Button>
</Form>
<p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p> 
                </div>
        );
};

export default Register;