import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Container, Grid, Typography } from '@mui/material';



const NewsLetter = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };



    //
    // style
    //
    const buttonStyle = {
        backgroundColor: '#002426',
        textDecoration: 'none',
        fontSize:'20px',
        color: 'white',
        margin: '20px 10px',
        padding: '10px 26px',
        borderRadius: '10px'
    }
    const navOpen = {
        textDecoration: 'none',
        color: 'white'
    }
    const navClose = {
        textDecoration: 'none',
        color: '#002426'
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
    const BoxStyle = {
        backgroundImage: 'linear-gradient(rgba(0,36,38,0.5), rgba(0,48,38,0.5), rgba(0,64,38,0.5))',
        borderRadius:'100px',
        // backgroundColor: '#002426',
        margin: '150px 0px',
        padding: '250px 0px',
        color:'white'
    }
    const FormStyle = {
        display: 'block',
        margin: '30px 0'
    }

//
    // style
// 




    return (
        <Box style={BoxStyle}>
            <Container >
                <Typography variant="h3" sx={{ textAlign: 'center', pb: 15, textTransform: 'capitalize', fontWeight: "bold", color: '#002426' }}> Feel free to contact us</Typography>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={2}>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}sm={12} md={4}>
                            <label style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize:'20px' }} >Name</label>
                            <input style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize: '20px' }}type="text" name="user_name" />
                        </Grid>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} xs={12} md={4}>
                            <label style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize: '20px' }}>Email</label>
                            <input style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize: '20px' }} type="email" name="user_email" />
                        </Grid>
                        <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center    ' }} xs={12} md={4}>
                            <label style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize: '20px' }}>Message</label>
                            <textarea style={{ fontWeight: 'bold', padding: '10px', color: '#002426', borderRadius: 10, fontSize: '20px' }} name="message" />
                        </Grid>
                    </Grid>
                    <input style={buttonStyle} type="submit" value="Send" />
                </form>
            </Container>
        </Box>
    );
};

export default NewsLetter;