import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Container, Grid, Typography } from '@mui/material';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import { Box } from '@mui/system';
import './Login.css'

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
        <div >
            <Header />
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box className="form">
                            <Typography variant="h3" sx={{ fontWeight: 600 }}>
                                Please Sign in
                            </Typography>
                            
                            <Container>
                                <div className="mt-5 pt-5">
                                    <input onBlur={handleEmail} className="form-input" type="email" name="" placeholder="Email" />
                                    <br />
                                    <br />
                                    <input onBlur={handlePassword} className="form-input" type="password" name="" placeholder="Password" />
                                    <br />
                                    <div className="">{error}</div>
                                    <br />
                                    <div className="text-center">
                                        <Button onClick={handleLogin} className="my-3">Sign In</Button>
                                    </div>
                                </div>
                            </Container>
                            <Typography variant="h6" sx={{ fontWeight: 600,}}>
                                OR
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 600,}} >
                                Sign in With Google
                            </Typography>
                            <Button onClick={googleLogin}>Login</Button>
                            <Typography variant="h5" sx={{ fontWeight: 600 }}>
                                New Here?
                            </Typography>
                            <Button sx={{ fontWeight: 600, typography: 'h5' }}>
                                <NavLink to="/signin" >Create an Account</NavLink >
                            </Button>
                       </Box>
                    </Grid>
                    </Grid>
            
            </Container>
        </div>
    );
};

export default Login;