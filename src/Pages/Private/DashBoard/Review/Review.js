import { Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
    }, [])
    



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
        <Container sx={{ mb: 5, pb: 5 }}>
            <h1>All Reviews</h1>
            <TableContainer component={Paper}>
                <Table style={allProducts} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={cellStyle}>Name </TableCell>
                            <TableCell style={cellStyle} align="right">Email</TableCell>
                            <TableCell style={cellStyle} align="right">Review</TableCell>
                        </TableRow>
                        {reviews.map((review) => (
                            <TableRow
                                key={review._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell style={cellStyle} align="left">{review.name}</TableCell>
                                <TableCell style={cellStyle} align="right">{review.email}</TableCell>
                                <TableCell style={cellStyle} align="right">{review.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Review;