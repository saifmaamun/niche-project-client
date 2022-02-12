import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);


    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`
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
            <h1>All Products</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.hints}</TableCell>
                                <TableCell align="right">${product.price}</TableCell>
                                <TableCell component="th" scope="row">
                                    <img style={{ width: '100%' }} src={product.img} alt="" />
                                </TableCell>
                                <TableCell align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(product._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllProducts;