import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ mt: 5, pt: 10, backgroundColor: '#002426' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid sm={12} md={3}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> Support</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> +880-1234567890</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> +880-1234567890</Typography>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={2}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> about us</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> blogs</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> writer</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> books</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> publications</Typography>
                        </Box>
                    </Grid>
                    <Grid sm={12} md={3}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ textAlign: 'left', py: 10, textTransform: 'capitalize', color: 'white' }}> </Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> about us</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> contact us</Typography>
                        </Box>
                    </Grid>
                   
                    <Grid sm={12} md={4}>
                    <Box sx={{ flexDirection: 'row' }}>
                        <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> stay connnected</Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> 6th floor, 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', py: 3, color: 'white' }}> email: treasure@book.com</Typography>
                    </Box>
                </Grid>
                </Grid>
            </Container>
            <Container>
                <Box sx={{py:5}}>
                    <hr />
                    <Typography variant="caption" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> © 2020 treasure book | All rights reserved</Typography>
                </Box>
            </Container>

        </Box>
    );
};

export default Footer;