import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    console.log(product)
    const { name, hints, img, price, _id } = product;
    return (
        <Card className="card-hover" sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent className="card-style" >
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                        {product.name}
                    </Typography>
                    <Typography variant="body2">
                        {product.hints.slice(0, 60)}
                    </Typography>
                    <Button
                        variant="h2"
                        sx={{ my: 2,  display: 'block' }}
                    >
                        <NavLink to={`/products/${_id}`}>Purchase</NavLink>

                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Product;