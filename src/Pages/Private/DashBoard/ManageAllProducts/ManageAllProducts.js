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


    return (
        <Container>
            <Typography variant="h3" sx={{my:5, fontWeight: 600 }}>
                All Products
            </Typography>
            <TableContainer className="all-products" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cell-style" align="right">Book Name</TableCell>
                            <TableCell className="cell-style" align="right">Description</TableCell>
                            <TableCell className="cell-style" align="right">Price</TableCell>
                            <TableCell className="cell-style" align="right">Image</TableCell>
                            <TableCell className="cell-style" align="right">Remove</TableCell>
                        </TableRow>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className="cell-style" align="right">{product.name}, written by { product?.writer}</TableCell>
                                <TableCell className="cell-style" align="right">{product.hints}</TableCell>
                                <TableCell className="cell-style" align="right">${product.price}</TableCell>
                                <TableCell className="cell-style" component="th" scope="row">
                                    <img style={{ width: '100%' }} src={product.img} alt="" />
                                </TableCell >
                                <TableCell className="cell-style" align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(product._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllProducts;