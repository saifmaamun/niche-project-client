import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box, Button, Container } from '@mui/material';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        
        axios.post('https://frozen-meadow-47661.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    console.log(data);
                    reset()
                }
            })
    };


    return (
        <Container>

        <Box className="form"> 
            <h1>Add A Book</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-input" {...register("name", { required: true })} placeholder='Model No' /> <br />
                    <input className="form-input" {...register("writer", { required: true })} placeholder='Writer Name' /> <br />
                    <input className="form-input" {...register("hints", { required: true })} placeholder='Summery' /> <br />
                    <input className="form-input" {...register("img", { required: true })} placeholder='Image' /> <br />
                    <input className="form-input" type="number" {...register("price", { required: true })} placeholder='Price' /> <br />
                    <Button><input className="form-input" type="submit" /></Button>
            </form>
        </Box>
        </Container>
    );
};

export default AddProduct;