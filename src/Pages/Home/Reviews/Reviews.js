import { TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
},[])

    return (
        <Box>
            {reviews.map((review) => (
                <div
                    key={review._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <h1>{review.name }</h1>
                </div>
            ))}
        </Box>
    );
};

export default Reviews;