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

export const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: '#BADA9B' }}
          >
            <HomeIcon onClick={() => navigate('/')} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            User Data
          </Typography>
          <Typography
            sx={{ marginRight: '8px' }}
            onClick={() => navigate('/login')}
            variant="h6"
          >
            Welcome Stephen!
          </Typography>
          <Button onClick={() => navigate('/login')} variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
