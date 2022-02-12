import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Signin = () => {
    const { auth,user, registerUser } = useAuth();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // console.log(user, name);

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password, name);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            registerUser(email, password, name);
        }
        console.log(email, password, name,user);
        navigate('/')
    }




    return (
        <div>
            <Header/>
            <h1>login using google</h1>
            <p>user is { user.name}</p>
            <div>
                <h1>signin</h1>
                <form onSubmit={handleRegistration}>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>

                    <div className="row mb-3 text-danger">{error}</div>
                    <button type="submit" className="btn btn-warning">
                        Register
                    </button>


                </form>
            </div>
            <Button>
                <NavLink to="/login" className="style px-1 text-light fw-bold">Already Have an Account</NavLink >
                </Button>
        </div>
    );
};

export default Signin;