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
import { useTypedSelector } from '../../hooks';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const state = useTypedSelector((state) => state);
  const { given_name } = state.authData;
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
            {given_name && `Welcome ${given_name}`}
          </Typography>
          {!given_name && (
            <Button onClick={() => navigate('/login')} variant="contained">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
