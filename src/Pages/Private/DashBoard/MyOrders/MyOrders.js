import { Button, Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/bought')
            .then(res => res.json())
            .then(data => {
                const addedItems = data.filter(items => items.email === user.email)
                setBoughtItems(addedItems);
        })
    }, [boughtItems])
    


    const handleDelete = id => {
        console.log(id)
        const url = `https://frozen-meadow-47661.herokuapp.com/${id}`
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
    const allProducts = {
        boxShadow: '2px 2px 2px 2px #002426',
        borderRadius: '10px',
        backgroundColor: '#002426',
        color: '#fff'
    }


//
    // style
// 







    return (
        <Container>
            <h1>{user.displayName}'s Purchase</h1>
            <TableContainer component={Paper}>
                <Table style={allProducts} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle}>Name</TableCell>
                            <TableCell style={cellStyle} align="right">Book Nme</TableCell>
                            <TableCell style={cellStyle} align="right">Address</TableCell>
                            <TableCell style={cellStyle} align="right">Phone Number</TableCell>
                            <TableCell style={cellStyle} align="right">Price ($)</TableCell>
                            <TableCell style={cellStyle} align="right">Delete Button</TableCell>
                        </TableRow>
                        {boughtItems.map((boughtItem) => (
                            
                            <TableRow
                                key={boughtItem._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={cellStyle} component="th" scope="row">
                                    {boughtItem.userName}
                                </TableCell>
                                <TableCell style={cellStyle} align="right">{boughtItem.productName}</TableCell>
                                <TableCell style={cellStyle} align="right">{boughtItem.address}</TableCell>
                                <TableCell style={cellStyle} align="right">{boughtItem.number}</TableCell>
                                <TableCell style={cellStyle} align="right">{boughtItem.price}</TableCell>
                                <TableCell align="right"><Button style={buttonStyle} onClick={() => handleDelete(boughtItem._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrders;