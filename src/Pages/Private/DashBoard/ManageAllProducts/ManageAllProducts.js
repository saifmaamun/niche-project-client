import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageAllProducts.css'

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);


    const handleDelete = id => {
        const url = `https://frozen-meadow-47661.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
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
    const cellStyle = {
        padding: '10px auto',
        color: 'white'
    }
    const allProducts={
        boxShadow: '2px 2px 2px 2px #002426',
        borderRadius: '10px',
        backgroundColor:'#002426',
        color: '#fff'
    }

//
    // style
// 





    return (
        <Container>
            <Typography variant="h3" sx={{my:5, fontWeight: 600 }}>
                All Products
            </Typography>
            <TableContainer  component={Paper}>
                <Table style={allProducts} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle} align="right">Book Name</TableCell>
                            <TableCell style={cellStyle} align="right">Description</TableCell>
                            <TableCell style={cellStyle} align="right">Price</TableCell>
                            <TableCell style={cellStyle} align="right">Image</TableCell>
                            <TableCell style={cellStyle} align="right">Remove</TableCell>
                        </TableRow>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={cellStyle} align="right">{product.name}, written by { product?.writer}</TableCell>
                                <TableCell style={cellStyle} align="right">{product.hints}</TableCell>
                                <TableCell style={cellStyle} align="right">${product.price}</TableCell>
                                <TableCell style={cellStyle} component="th" scope="row">
                                    <img style={{ width: '100%' }} src={product.img} alt="" />
                                </TableCell >
                                <TableCell style={cellStyle} align="right"><Button style={buttonStyle} onClick={() => handleDelete(product._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllProducts;