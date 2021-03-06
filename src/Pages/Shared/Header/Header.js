import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
    const { user, logOut } = useAuth();
    // console.log(user);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


//
    // style
//
    const buttonStyle = { 
        backgroundColor: 'white',
        textDecoration: 'none',
        color: '#002426',
        padding:'7px 12px'
    }
    const navOpen = { 
        textDecoration: 'none',
        color: 'white'
    }
    const navClose = { 
        textDecoration: 'none',
        color: '#002426'
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
        <AppBar style={{ backgroundColor:'#002426'}} position="static" sx={{  color: 'white'}}>
            <Container maxWidth="xl" sx={{ my: 2, flexDirection: 'row', alignItems: 'center' }}>
                <Toolbar disableGutters>
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                    </Typography> */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><NavLink style={navClose} to="/home">Treasure</NavLink></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><NavLink style={navClose} to="/home">Home</NavLink></Typography>
                            </MenuItem>
                            
                               {!user?.email && <Box><MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><NavLink style={navClose} to="/login">Login</NavLink></Typography>
                                </MenuItem>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center"><NavLink style={navClose} to="/signin">Register</NavLink></Typography>
                                    </MenuItem></Box>}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><NavLink style={navClose} to="/products">Products</NavLink></Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"><NavLink style={navClose} to="/dashboard">Dashboard</NavLink></Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    
                    {/* <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <NavLink style={navOpen}  to="/home">
                            <Button
                                variant="h2"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block' }}
                            >Treasure
                            </Button>
                        </NavLink>
                        <NavLink style={navOpen}  to="/home">
                            <Button
                                className="button-style"
                                variant="h2"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Home
                            </Button>
                        </NavLink>

                        {!user?.email &&
                            <NavLink style={navOpen} to="/login">
                                <Button
                                    variant="h2"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, display: 'block' }}
                                >Login</Button>
                            </NavLink>}

                            {!user?.email && <NavLink style={navOpen}  to="/signin">
                                <Button
                                    variant="h2"
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2,  display: 'block' }}
                                >Register</Button>
                            </NavLink>
                       }

                        <NavLink style={navOpen}  to="/products">
                            <Button
                                variant="h2"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2,  display: 'block' }}
                            > Books </Button>
                        </NavLink>

                        <NavLink style={navOpen}  to="/dashboard">
                            <Button
                                variant="h2"
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >Dashboard</Button>
                        </NavLink>

                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                    {user?.email && <Button sx={{mr:3}}onClick={logOut} style={buttonStyle}>Logout</Button>}
                    {user?.email && <Typography sx={{ color: 'black', bgcolor: 'white', px: 3, py: 1, borderRadius:1 }} variant="subtitle2" component="div">
                        {user.displayName}
                    </Typography>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;