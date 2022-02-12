import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Container, Typography } from '@mui/material';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const Login = () => {
    const { auth, googleLogin, user, userLogin, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        userLogin(email, password);
        console.log(from);
        navigate(from, {replace: true});
        
    }
    

    

    
    return (
        <div>
            <Header/>
            <Typography>
                new here?
            </Typography>
            <Button>
                <NavLink to="/signin" className="style px-1 text-light fw-bold">Create an Account</NavLink >
            </Button>
            <Container>
                        <div className="mt-5 pt-5">
                            <input onBlur={handleEmail} className="w-100 py-3 rounded border-info" type="email" name="" placeholder="Email" />
                            <br />
                            <br />
                            <input onBlur={handlePassword} className="w-100 py-3 rounded border-info" type="password" name="" placeholder="Password" />
                            <br />
                            <div className="row mb-3 text-danger">{error}</div>
                            <br />
                            <div className="text-center">
                                <Button onClick={handleLogin} className="my-3">Log In</Button>
                            </div>
                        </div>
            </Container>
            <Typography>
                OR
            </Typography>
            <Typography>
                sign in with google
            </Typography>
            <Button onClick={googleLogin}>Login</Button>
        </div>
    );
};

export default Login;