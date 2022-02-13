import { Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <Container sx={{ mb: 5, pb: 5 }}>
            <h1>All Reviews</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Model </TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Review</TableCell>
                        </TableRow>
                        {reviews.map((review) => (
                            <TableRow
                                key={review._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{review.name}</TableCell>
                                <TableCell align="right">{review.email}</TableCell>
                                <TableCell align="right">{review.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Review;