import { Box, Container } from '@mui/material';
import React from 'react';
import bannerImg from '../../../images/banner/1st-banner.jpg'

const Banner = () => {
    return (
        <Box sx={{bgcolor:'black'}}>
                <img src={bannerImg} alt="" />
        </Box>

    );
};

export default Banner;