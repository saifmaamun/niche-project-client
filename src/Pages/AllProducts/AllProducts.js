import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>

            <Header />
            <Container>

                <Box sx={{ m: 8 }}>
                    <Typography variant="h3" sx={{ textAlign: 'left', py: 5, ml: -4, textTransform: 'capitalize', fontWeight: "bold", color: 'black' }}> <u>Our Collections</u> </Typography>
                    <Container>
                        <Grid container spacing={2}>
                            {
                                products.map(product =>
                                    <Grid item xs={12} md={12} sm={6} md={4}>
                                        <Product
                                            key={product._id}
                                            product={product}
                                        ></Product>
                                    </Grid>
                                )
                            }
                        </Grid>


                    </Container>
                </Box>
            </Container>
            <Footer/>
        </div>
    );
};

export default AllProducts;