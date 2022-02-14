import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{ mt: 5, py: 10, backgroundColor: '#002426' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid md={2}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize',  color: 'white' }}> Support</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> +880-1234567890</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> +880-1234567890</Typography>
                        </Box>
                    </Grid>
                    <Grid md={6}>
                        <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> about us</Typography>
                        <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. They’re also anchors for our downtowns and communities.</Typography>
                        <Grid item md={4}>
                        </Grid>
                        <Grid item md={4}>
                        </Grid>
                        <Grid item md={4}>
                        </Grid>
                    </Grid>

                    <Grid md={3}>
                        <Box sx={{ flexDirection: 'row' }}>
                            <Typography variant="h6" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize',  color: 'white' }}> stay connnected</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', color: 'white' }}> 6th floor, 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka 1000</Typography>
                            <Typography variant="body1" sx={{ textAlign: 'left', textTransform: 'capitalize', py:3, color: 'white' }}> email: treasure@book.com</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <hr />
                <Typography variant="caption" sx={{ textAlign: 'left', py: 5, textTransform: 'capitalize', color: 'white' }}> © 2020 treasure book | All rights reserved</Typography>
            </Container>

        </Box>
    );
};

export default Footer;