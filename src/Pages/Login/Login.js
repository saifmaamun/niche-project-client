import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Container, Grid, Typography } from '@mui/material';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import { Box } from '@mui/system';
import './Login.css'
import Footer from '../Shared/Footer/Footer';

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
    





    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '8px 26px',
        borderRadius: '5px',
        marginBottom:'10px'
    }
    const navOpen = {
        textDecoration: 'none',
        color: 'white', 
        fontWeight:'bold'
    }
    const navClose = {
        textDecoration: 'none',
        color: '#002426',
    }
    const btnPrimary = {
        backGroundColor: 'white',
        color: '#002426',
        textDecoration: 'none',
        padding: '7px 12px'
    }
    const btnSecondary = {
        backGroundColor: '#002426',
        color: 'white',
        textDecoration: 'none',
        padding: '7px 12px'
    }

//
    // style
// 

    

    
    return (
        <div >
            <Header />
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} md={6}>
                        
                    </Grid>
                    <Grid item xs={12} md={12} md={6}>
                        <Box className="form">
                            <Typography variant="h3" sx={{my:4, fontWeight: 600 }}>
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
                                        <Button style={buttonStyle} onClick={handleLogin} >Sign In</Button>
                                    </div>
                                </div>
                            </Container>
                            <Typography variant="h6" sx={{my:3, fontWeight: 600,}}>
                                OR
                            </Typography>
                            <Typography variant="h5" sx={{ my: 2, fontWeight: 600,}} >
                                Sign in With Google
                            </Typography>
                            <Button style={buttonStyle} onClick={googleLogin}>Google Signin</Button>
                            <Typography variant="h5" sx={{ mt: 3,  fontWeight: 600 }}>
                                New Here?
                            </Typography>
                            <Button sx={{fontWeight: 600, typography: 'h4' }}>
                                <NavLink style={navOpen} to="/signin" >Create an Account</NavLink >
                            </Button>
                       </Box>
                    </Grid>
                    </Grid>
            
            </Container>
            <Footer/>
        </div>
    );
};

export default Login;