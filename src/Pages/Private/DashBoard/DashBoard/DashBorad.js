import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, MenuItem } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import useAuth from '../../../../hooks/useAuth';
import './DashBoard.css'
import Footer from '../../../Shared/Footer/Footer';

const drawerWidth = 240;
const DashBorad = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    //
    // style
    //
    const buttonStyle = {
        backgroundColor: '#002426',
        textDecoration: 'none',
        color: 'white',
        padding: '10px 26px',
        borderRadius: '5px'
    }
    const navOpen = {
        textDecoration: 'none',
        color: '#002426'
    }
    const navClose = {
        textDecoration: 'none',
        color: 'white'
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







    const drawer = (
        <div>
            <Toolbar elevation='16' className='dashboard-toolbar' >
                Dashboard
            </Toolbar>
            <Divider />
            <NavLink style={navOpen}to="/home">
            <MenuItem >
                <Typography textAlign="center">Home</Typography>
            </MenuItem>
            </NavLink>

            {!user?.email && 
                <NavLink style={navOpen} to="/login">
                    <MenuItem >
                        <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                </NavLink >}
            
            {!user?.email && 
                <NavLink style={navOpen} to="/signin">
                    <MenuItem >
                        <Typography textAlign="center">Signin</Typography>
                    </MenuItem>
                </NavLink >}

            <NavLink style={navOpen} to="/products">
            <MenuItem >
                <Typography textAlign="center">Products</Typography>
            </MenuItem>
</NavLink >

            <NavLink style={navOpen} to="/dashboard">
            <MenuItem >
                <Typography textAlign="center">Dashboard</Typography>
            </MenuItem>
    </NavLink >
            <Divider />
            <div>
                {admin && <Box>
                    
                    <NavLink style={navOpen} to="/dashboard/addproducts">
                <MenuItem >
                    <Typography textAlign="center">Add Product</Typography>
                    </MenuItem>
                    </NavLink>
                    <NavLink style={navOpen} to="/dashboard/myorders">
                        <MenuItem >
                            <Typography textAlign="center">My Orders</Typography>
                        </MenuItem>
                    </NavLink>
            
                
                    <NavLink style={navOpen} to="/dashboard/makeadmin">
                <MenuItem >
                    <Typography textAlign="center">Make Admin</Typography>
                        </MenuItem>
                    </NavLink>

                    <NavLink style={navOpen} to="/dashboard/manageallorders">
                <MenuItem >
                    <Typography textAlign="center">Manage Orders</Typography>
                </MenuItem>
            </NavLink>

                    <NavLink style={navOpen} to="/dashboard/manageallproducts">
                <MenuItem >
                    <Typography textAlign="center">Manage Products</Typography>
                    </MenuItem>
                </NavLink>
                </Box>}

                {!admin &&<Box>
                    <NavLink style={navOpen} to="/dashboard/myorders">
                        <MenuItem >
                            <Typography textAlign="center">My Orders</Typography>
                        </MenuItem>
                    </NavLink>

                    <NavLink style={navOpen} to="/dashboard/review">
                        <MenuItem >
                            <Typography textAlign="center">Review</Typography>
                        </MenuItem>
                    </NavLink>
                </Box>}
                {user?.email && <Typography sx={{ color: '#002426', textAlign:'left', bgcolor: 'white', px: 3, py: 3, borderRadius: 1 }} variant="h6" component="div">
                   User Name: {user.displayName}
                </Typography>}
                {user?.email && <Button sx={{ mr: 3 }} onClick={logOut} style={buttonStyle}>Logout</Button>}

            </div>
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    color: 'black',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="dashboard-toolbar">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {/* Responsive drawer */}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
DashBorad.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
    ;

export default DashBorad;