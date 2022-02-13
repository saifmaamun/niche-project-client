import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import bannerImg from '../../../images/banner/2nd-banner.jpg'
import  './Banner.css'

const Banner = () => {



    return (
        <Box sx={{ py:3 }} className="gradient">
            <Container >
                <Grid container spacing={2} sx={{ flexDirection: 'row', alignItems: 'center' }}>
                <Grid xs={12} md={6}>
                        <Box sx={{ typography: 'h4', textAlign: 'left', textTransform: 'capitalize', fontWeight: 500, color:'white' }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit consequuntur facere eaque placeat quo, delectus est totam fuga iste.
                        </Box>
                        <Box>
                            <NavLink to="/products">
                                <Button
                                    sx={{ typography: 'h6',my: 2, color: 'white', display: 'block' }}
                                > Products </Button>
                            </NavLink>
                        </Box>
                </Grid>
                    <Grid xs={0} md={6}>

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