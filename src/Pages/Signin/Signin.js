import React, { useState } from 'react';
import Button from '@mui/material/Button'
import { Box, Container, Grid, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Signin = () => {
    const { auth, user, registerUser } = useAuth();
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
        console.log(email, password, name, user);
        navigate('/')
    }






    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '8px 26px',
        margin:'20px 0px',
        borderRadius: '5px',
        marginBottom: '10px'
    }
    const navOpen = {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '50px'
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
        <div>
            <Header />

            <div>
                <Container sx={{ mt: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>

                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="form">

                                <Typography variant="h3" sx={{ fontWeight: 600 }}>
                                    Create New Account
                                </Typography>
                                <form onSubmit={handleRegistration}>
                                    <div className="">
                                        <label htmlFor="inputName" className="col-form-label">
                                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                                Name
                                            </Typography>
                                        </label>
                                        <div className="">
                                            <input type="text" onBlur={handleNameChange} className="form-input form-control" id="inputName" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div >  
                                        <label htmlFor="inputEmail3" className="ol-form-label"><Typography variant="body1" sx={{ fontWeight: 600 }}>
                                            Email
                                        </Typography></label>
                                        <div className="">
                                            <input onBlur={handleEmailChange} type="email" className="form-input form-control" id="inputEmail3" required />
                                        </div>
                                    </div>
                                    <div className="">
                                        <label htmlFor="inputPassword3" className="col-form-label"><Typography variant="body1" sx={{ fontWeight: 600 }}>
                                            Password
                                        </Typography></label>
                                        <div className="">
                                            <input type="password" onBlur={handlePasswordChange} className="form-input form-control" id="inputPassword3" required />
                                        </div>
                                    </div>

                                    <div className="">{error}</div>
                                    <Button style={buttonStyle} type="submit" className="">
                                        Register
                                    </Button>


                                </form>
                                <Button>
                                    <NavLink style={navOpen}to="/login" className="">Already Have an Account</NavLink >
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default Signin;