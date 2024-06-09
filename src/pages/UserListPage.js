import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../api/userApi';
import { Link } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const UserListPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getUsers();
            setUsers(result);
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>User List</Typography>
            <Button component={Link} to="/users/new" variant="contained" color="primary" sx={{ mb: 2 }}>
                Add User
            </Button>
            <List>
                {users.map(user => (
                    <ListItem key={user.id} divider>
                        <ListItemText primary={user.name} secondary={user.email} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" component={Link} to={`/users/${user.id}`} aria-label="edit">
                                <Edit />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(user.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default UserListPage;
