import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImg from '../../../images/banner/2nd-banner.jpg'
import  './Banner.css'

const Banner = () => {


    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '7px 12px'
    }
    const navOpen = {
        textDecoration: 'none',
    }

//
    // style
// 



    return (
        <Box sx={{ py:3 }} className="gradient">
            <Container >
                <Grid container spacing={2} sx={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Grid xs={12} md={12} md={6}>
                        <Box sx={{ typography: 'caption', textAlign: 'left',my:4, textTransform: 'capitalize', fontWeight: 500, color: 'white' }}>
                            in search of treasures
                        </Box>

                        <Box sx={{ typography: 'h3', textAlign: 'left', mr: 5,my:4, textTransform: 'capitalize', fontWeight: 500, color: 'white' }}>
                            There is more treasure in books than in all the pirate’s loot on Treasure Island.
                            
                        </Box>
                        <Box>
                            <NavLink style={navOpen} to="/products">
                                <Button 
                                    style={buttonStyle} 
                                    sx={{ typography: 'h6',my: 5,  display: 'block' }}
                                > See All Books </Button>
                            </NavLink>
                        </Box>
                </Grid>
                    <Grid xs={12} md={0} md={6}>

                        <Box className="">
                            <img className="image-shape" sx={{ width: 'auto%' }} src={bannerImg} alt="" srcset="" />
                        </Box>
                </Grid>
            </Grid>
                    </Container>
        </Box>

    );
};

export default Banner;