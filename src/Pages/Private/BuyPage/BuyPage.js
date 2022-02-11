import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const BuyPage = () => {
    const [purchase, setPurchase] = useState({})
    const { name, hints, img, price } = purchase;
    const { id } = useParams();
    console.log(purchase)


    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])


    return (
        <Box>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>

                    <h1>{name}</h1>
                    <Box sx={{ width: 1/4 }}>
                <img src={img} alt="" srcset="" />

                    </Box>
                </div>
            </Container>
            
        </Box>
    );
};

export default BuyPage;