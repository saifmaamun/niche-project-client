import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Product from '../Product/Product';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


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

export default AllProducts;