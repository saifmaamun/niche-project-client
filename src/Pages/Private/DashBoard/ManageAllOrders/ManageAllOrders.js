import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [boughtItems, setBoughtItems] = useState([]);


    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/bought')
            .then(res => res.json())
            .then(data => setBoughtItems(data))
    }, [boughtItems]);


    const handleDelete = id => {
        const url = `https://frozen-meadow-47661.herokuapp.com/bought/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = boughtItems.filter(boughtItem => boughtItem._id !== id)
                    setBoughtItems(remaining)
                }
            })
    }


    return (
        <Container>
            <h1>All Purchase</h1>
            <TableContainer className="all-orders" component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="cell-style">User Name</TableCell>
                            <TableCell className="cell-style" align="right">Book Name</TableCell>
                            <TableCell className="cell-style" align="right">Address</TableCell>
                            <TableCell className="cell-style" align="right">Phone Number</TableCell>
                            <TableCell className="cell-style" align="right">Price</TableCell>
                            <TableCell className="cell-style" align="right">Delete</TableCell>
                        </TableRow>
                        {boughtItems.map((boughtItem) => (
                            <TableRow
                                key={boughtItem._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell className="cell-style" component="th" scope="row">
                                    {boughtItem.userName}
                                </TableCell>
                                <TableCell className="cell-style" align="right">{boughtItem.productName}</TableCell>
                                <TableCell className="cell-style" align="right">{boughtItem.address}</TableCell>
                                <TableCell className="cell-style" align="right">{boughtItem.number}</TableCell>
                                <TableCell className="cell-style" align="right">{boughtItem.price}</TableCell>
                                <TableCell className="cell-style" align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(boughtItem._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllOrders;