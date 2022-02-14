import { Box, Button, Card, CardActionArea, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';
import './BuyPage.css'
import Footer from '../../Shared/Footer/Footer';

const BuyPage = () => {
    const [purchase, setPurchase] = useState({})
    const { name,writer, hints, img, price } = purchase;
    const { id } = useParams();
    console.log(purchase)
    const { user } = useAuth();
    const { displayName, email } = user;
    const navigate = useNavigate();


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-meadow-47661.herokuapp.com/bought', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    navigate("/products")
                }
            })
    }


    useEffect(() => {
        fetch(`https://frozen-meadow-47661.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])





    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '10px 30px',
        borderRadius: '5px',
        border: 'none',
        fontWeight:'bold'
    }
    const navOpen = {
        textDecoration: 'none',
        color: 'white'
    }
    const navClose = {
        textDecoration: 'none',
        color: '#002426'
    }
    const btnPrimary = {
        backGroundColor: 'white',
        color: '#002426',
        textDecoration: 'none',
        padding: '7px 12px'
    }
    const btnSecondary = {
        backGroundColor: '#002426',
        color: 'white',
        textDecoration: 'none',
        padding: '7px 12px'
    }

//
    // style
// 




    

    return (
        <Box>
            <Header />
            <Container sx={{ mx: 'auto', mt: 5, borderRadius: 10 }}>
                <Box sx={{ flexGrow: 1, py: 3 }}>
                    <Grid sx={{ alignItems: 'center' }} container spacing={5}>
                        <Grid item xs={12} md={7}>
                            <Box>
                                <Box sx={{ display: 'flex', my: 3, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                    <div>
                                        <img style={{ width: '100%', borderRadius: 10 }} src={img} alt='car'></img>
                                    </div>
                                    <div>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {name} <Typography gutterBottom variant="h6" component="div">
                                                by {writer}
                                            </Typography>
                                        </Typography>
                                    </div>
                                </Box>
                                        <Typography textAlign="left" variant="body1" >
                                            {hints}
                                        </Typography>
                                <Box sx={{ my:3}}>

                                    <Card>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography variant="h6" component="div">
                                                    Price:  ${price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box className="form">
                                <h1>Please Fill The Form</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-input" value={displayName} {...register('userName', { required: true })} /> <br />
                                    <input className="form-input" value={email} {...register("email", { required: true })} /> <br />
                                    <input className="form-input" value={name} {...register("productName", { required: true })} /> <br />
                                    <input className="form-input" value={hints} {...register("details", { required: true })} /> <br />
                                    <input className="form-input" value={price} {...register("price", { required: true })} /> <br />
                                    <input className="form-input" {...register("address", { required: true })} placeholder='Address' /> <br />
                                    <input className="form-input"  {...register("number", { required: true })} type='number' placeholder='Phone Number' /> <br />
                                    {errors.exampleRequired && <span>This field is required</span>} <br />
                                    <Button>
                                        <input style={buttonStyle} type="submit" >
                                        </input>
                                    </Button>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
<Footer/>
        </Box>
    );
};

export default BuyPage;