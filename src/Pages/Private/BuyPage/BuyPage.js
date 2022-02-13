import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const BuyPage = () => {
    const [purchase, setPurchase] = useState({})
    const { name, hints, img, price } = purchase;
    const { id } = useParams();
    console.log(purchase)
    const {user}=useAuth();
    const { displayName, email } = user;
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-meadow-47661.herokuapp.com/bought', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                   navigate ("/products")
                }
            })
    }



    useEffect(() => {
        fetch(`https://frozen-meadow-47661.herokuapp.com/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])


    return (
        <Box>
            <Container sx={{ mx: 'auto', mt: 5, borderRadius: 10, bgcolor: 'warning.main' }}>
                <Box sx={{ flexGrow: 1, py: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8}>
                            <img style={{ width: '100%', borderRadius: 10 }} src={img} alt='car'></img>
                            <Card >
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {hints}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            Price: Starts From ${price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <h1>Please Fill in</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input value={displayName} {...register('userName', { required: true })} /> <br />
                                <input value={email} {...register("email", { required: true })} /> <br />
                                <input value={name} {...register("productName", { required: true })} /> <br />
                                <input value={hints} {...register("details", { required: true })} /> <br />
                                <input value={price} {...register("price", { required: true })} /> <br />
                                <input {...register("address", { required: true })} placeholder='Address' /> <br />
                                <input  {...register("number", { required: true })} type='number' placeholder='Phone Number' /> <br />
                                {errors.exampleRequired && <span>This field is required</span>} <br />

                                <input type="submit" />
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </Box>
    );
};

export default BuyPage;