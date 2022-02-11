import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Product = ({ product }) => {
    console.log(product)
    const { name, hints, img, price, _id } = product;
    return (
        <Card sx={{ maxWidth: 345 }}>
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
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Product;