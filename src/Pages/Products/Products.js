import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';

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
        <Box sx={{ m: 8 }}>
            <h1>Products</h1>
            <Container>
                <Grid container spacing={2}>
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

export default Products;