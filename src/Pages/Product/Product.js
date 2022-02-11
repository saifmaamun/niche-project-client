import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    console.log(product)
    const { name, hints, img, price, _id } = product;
    return (
        <Card elevation='16' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.hints.slice(0, 60)}
                    </Typography>
                    <Button
                        variant="h2"
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        <NavLink to={`/products/${_id}`}>Purchase</NavLink>

                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Product;