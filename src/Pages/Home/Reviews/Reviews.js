import { Card, CardContent, Container, Grid, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch('https://frozen-meadow-47661.herokuapp.com/reviews')
            .then(res => res.json())
        .then(data=>setReviews(data))
},[])

    return (
        <Box sx={{ my: 5 }}>
            <Container>
                <Typography variant="h3" sx={{ textAlign: 'left', py: 5, ml: -4,color:'#002426', textTransform: 'capitalize', fontWeight: "bold"}}> <u>Customer Reviews</u> </Typography>

            <Grid container spacing={2}>
                    
            {reviews.map((review) => (
                <Grid item xs={12} md={4}>
                <div
                key={review._id}
                >
                        <Card className="review" >
                        <CardContent  sx={{textAlign: 'left'}}>
                                <Typography variant="h6"  gutterBottom>
                                {review.name}
                            </Typography>
                            <Typography variant="h4" component="div">
                                {review.description}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }}>
                                {review.email}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Grid>
            ))}
            </Grid>
            </Container>
        </Box>
    );
};

export default Reviews;