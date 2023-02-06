import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const Header: React.FC = () => {
  const navigate = useNavigate();

  const { logout, token } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!token) {
      navigate('/login');
    } else {
      logout();
    }
  };

  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#bada9b' }}
          >
            <HomeIcon onClick={() => navigate('/')} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Data
          </Typography>

          <Button onClick={handleClick} variant="contained">
            {!token ? 'Login' : 'Logout'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
