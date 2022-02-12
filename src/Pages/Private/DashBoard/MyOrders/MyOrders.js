import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bought')
            .then(res => res.json())
            .then(data => {
                const addedItems = data.filter(items => items.email === user.email)
                setBoughtItems(addedItems);
        })
    }, [boughtItems])
    


    const handleDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/bought/${id}`
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
            <h1>{user.displayName}'s Purchase</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Price (g)</TableCell>
                            <TableCell align="right">Delete Button</TableCell>
                        </TableRow>
                        {boughtItems.map((boughtItem) => (
                            
                            <TableRow
                                key={boughtItem._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {boughtItem.userName}
                                </TableCell>
                                <TableCell align="right">{boughtItem.productName}</TableCell>
                                <TableCell align="right">{boughtItem.address}</TableCell>
                                <TableCell align="right">{boughtItem.number}</TableCell>
                                <TableCell align="right">{boughtItem.price}</TableCell>
                                <TableCell align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(boughtItem._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;