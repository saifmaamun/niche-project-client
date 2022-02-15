import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Box, Button, Container, Grid } from '@mui/material';
import image from '../../../../images/addABook3.jpg'

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



    //
    // style
    //
    const buttonStyle = {
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding: '8px 26px',
        margin: '20px 0px',
        borderRadius: '10px',
        marginBottom: '10px'
    }
    const navOpen = {
        textDecoration: 'none',
        color: 'white',
        fontWeight: 'bold',
        marginTop: '50px'
    }
    const navClose = {
        textDecoration: 'none',
        color: '#002426',
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
    padding: '150px 10PX',
    background:'#002426',
    color: '#fff'
     }

    //
    // style
    // 




    return (
        <Box>

            <Container>

                
                        <Box style={formStyle}>
                <h1>Add A Book</h1>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-input" {...register("name", { required: true })} placeholder='Book Name' /> <br />
                                <input className="form-input" {...register("writer", { required: true })} placeholder='Writer Name' /> <br />
                                <input className="form-input" {...register("hints", { required: true })} placeholder='Summery' /> <br />
                                <input className="form-input" {...register("img", { required: true })} placeholder='Image' /> <br />
                                <input className="form-input" type="number" {...register("price", { required: true })} placeholder='Price' /> <br />
                                <Button><input style={buttonStyle} className="form-input" type="submit" /></Button>
                            </form>
                        </Box>
            </Container>
        </Box>
    );
};

export default AddProduct;