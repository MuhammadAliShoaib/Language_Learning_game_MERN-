import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../screens/home';
import Profile from '../screens/profile';
import LeaderBoard from '../screens/leaderboard';
import Quiz from '../screens/quiz';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Signup from '../screens/forms/signup';

const drawerWidth = 240;

function SMDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const [routes, setRoutes] = React.useState([
        {
            name: "Home",
            Route: "home",
            icon: <HomeIcon/>
        },
        {
            name: "Profile",
            Route: "profile",
            icon: <AccountBoxIcon/>
        },
        {
            name: "Leaderboard",
            Route: "leaderboard",
            icon: <LeaderboardIcon/>
        },
        {
            name: "Signup",
            Route: "signup",
            icon: <LeaderboardIcon/>
        },
    ])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let handleRoute = (route) => {
        navigate(route)
    }

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {routes.map((x, index) => (
                    <ListItem onClick={() => handleRoute(x.Route)} key={index} disablePadding>
                        <ListItemButton >
                            <ListItemIcon>
                                {x.icon}
                            </ListItemIcon>
                            <ListItemText primary={x.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
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
                        Language Learning Game
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
                
                <Routes>
                    <Route path="home/" element={<Home />} />
                    <Route path="profile/" element={<Profile />} />
                    <Route path="leaderboard/" element={<LeaderBoard />} />
                    <Route path="signup" element={<Signup/>}/>
                    <Route path="/quiz/:language/:difficulty" element={<Quiz/>} />
                </Routes>

            </Box>
        </Box>
    );
}

SMDrawer.propTypes = {
    window: PropTypes.func,
};

export default SMDrawer;