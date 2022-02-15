import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
   
    const onSubmit = data => {
        console.log(data, 'begining added')
        axios.post('https://frozen-meadow-47661.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    console.log(data);
                    reset()
                }
            })
    }



    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '10px 16px',
        borderRadius: '5px'
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
    const formStyle = {
        boxShadow: '2px 2px 2px 10px #002426',
        borderRadius: '10px',
        padding: '100px 10PX',
        background: '#002426',
        color: '#fff'
    }

//
    // style
// 






    return (
        <Container>
            <Box style={formStyle}>
            <h1>Give Us  Feedback</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{ width: '70%', marginTop: '10px', padding: '10px', borderRadius: '10px' }} value={user.displayName} {...register("name", { required: true })} placeholder='Book Name' />
                    <input style={{ width: '70%', marginTop: '10px', padding: '10px', borderRadius: '10px' }} {...register("description", { required: true })} placeholder='Feedback' />
                    <input style={{ width: '70%', marginTop: '10px', padding: '10px', borderRadius: '10px' }} value={user.email} {...register("email", { required: true })} placeholder='Email' />
                    <input style={{ width: '70%', marginTop: '10px', padding: '10px', borderRadius: '10px',color: '#002426', fontWeight: 'bold' }} type="submit" />
                </form>
            </Box>
        </Container>
    );
};

export default AddReview;