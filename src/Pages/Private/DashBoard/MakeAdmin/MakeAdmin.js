import { Alert, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://frozen-meadow-47661.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess(true)
            })
        e.preventDefault();
    }





    //
    // style
    //
    const buttonStyle = {
        backgroundColor: '#002426',
        textDecoration: 'none',
        color: 'white',
        padding: '8px 26px',
        margin: '20px 10px',
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

//
    // style
// 



    return (
        <div>
            <Typography variant="h3" sx={{my:5, fontWeight: 600 }}>
                Make Admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button style={buttonStyle} type="submit" >Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;

