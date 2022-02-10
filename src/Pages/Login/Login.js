import React, { useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import Button from '@mui/material/Button'
import { Container, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const { auth, googleLogin, user, userLogin,error } = useFirebase();



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        userLogin(email, password);
        // console.log(url)
        // history.push(url)


    };

    

    
    return (
        <div>
            <Typography>
                new here?
            </Typography>
            <Button>
                <NavLink to="/signin" className="style px-1 text-light fw-bold">Create an Account</NavLink >
            </Button>
            <Container>
                        <div className="mt-5 pt-5">
                            <input onBlur={hanldeEmail} className="w-100 py-3 rounded border-info" type="email" name="" placeholder="Email" />
                            <br />
                            <br />
                            <input onBlur={hanldePassword} className="w-100 py-3 rounded border-info" type="password" name="" placeholder="Password" />
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