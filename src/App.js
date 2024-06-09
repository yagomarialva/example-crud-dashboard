import React from 'react';
import AppRoutes from './routes';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        User Management
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                    <Button color="inherit" component={Link} to="/users">Users</Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 2 }}>
                <AppRoutes />
            </Container>
        </div>
    );
};

export default App;
