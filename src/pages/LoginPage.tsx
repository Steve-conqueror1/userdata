import React, { useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import jwtDecode from 'jwt-decode';

import { useActions } from '../hooks';
import { AuthPayload } from '../types';
import { useNavigate } from 'react-router-dom';

type GoogleResponse = {
  clientId: string;
  credential: string;
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const actions = useActions();

  const handleCallbackResponse = (response: GoogleResponse) => {
    const { credential } = response;
    localStorage.setItem('token', credential);

    const userObject = jwtDecode(credential);

    actions.setAuthData(userObject as AuthPayload);
    navigate('/');
  };

  useEffect(() => {
    /* global google */
    // @ts-ignore
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    // @ts-ignore
    google.accounts.id.renderButton(document.getElementById('signInBox'), {
      theme: 'filled_blue',
      size: 'large',
    });
  }, []);

  return (
    <Container sx={{ minHeight: 'auto' }}>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Box>
          <Typography variant="h3">Please Login</Typography>
        </Box>
        <Box sx={{ marginTop: '16px' }}>
          <Typography variant="body1">
            To view users' information, albums or photos, You need to login
          </Typography>
        </Box>

        <Box
          sx={{ marginTop: '30px', display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ marginTop: '20px' }} id="signInBox"></Box>
        </Box>
      </Box>
    </Container>
  );
};
