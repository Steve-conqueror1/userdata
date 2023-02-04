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
import { useTypedSelector, useActions } from '../../hooks';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const state = useTypedSelector((state) => state);
  const actions = useActions();
  const { given_name } = state.authData;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!given_name) {
      navigate('/login');
    } else {
      actions.clearStore();
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
          <Typography
            sx={{ marginRight: '8px' }}
            onClick={() => navigate('/login')}
            variant="h6"
          >
            {given_name && `Welcome ${given_name}`}
          </Typography>

          <Button onClick={handleClick} variant="contained">
            {!given_name ? 'Login' : 'Logout'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
