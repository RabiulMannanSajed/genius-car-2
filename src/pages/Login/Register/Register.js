import React, { useState } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value; // take the value from form
        const email = event.target.email.value; // take the value from form
        const password = event.target.password.value; // take the value from form

        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div className='register-form '>
            <h2 style={{ textAlign: 'center' }}>this is the register page</h2>
            <form onSubmit={handleRegister}>
                <input type="name" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <input type="password" name="password" id="" placeholder='Your password' />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger' onClick={navigateLogin}>Login</Link></p>
        </div>
    );
};

export default Register;