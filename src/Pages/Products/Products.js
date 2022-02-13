import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/products')
            .then(res => res.json())
        // .then(data=>console.log(data))
            .then(data => setProducts(data.slice(0, 6)))
    }, [])
console.log('products')

    return (
        <Box className="bg-banner" >
            <Container sx={{ py: "8rem" }}>
                <Typography variant="h3" sx={{ textAlign: 'left', py: 5, ml: -4, textTransform: 'capitalize', fontWeight: "bold", color: 'black' }}> <u>Our Collections</u> </Typography>
                <Grid container spacing={5}>
                    {
                        products.map(product =>
                            <Grid item xs={12} sm={6} md={4}>
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
    );
};
// variant = "h1"
export default Products;