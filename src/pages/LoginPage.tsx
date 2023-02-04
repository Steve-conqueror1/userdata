import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import jwtDecode from 'jwt-decode';

type GoogleResponse = {
  clientId: string;
  credential: string;
};

export const LoginPage: React.FC = () => {
  const [user, setUser] = useState<{ [key: string]: string }>({}); //Fixme: use redux
  const handleCallbackResponse = (response: GoogleResponse) => {
    console.log('response', response);

    const { credential } = response;

    const userObject = jwtDecode(credential);

    setUser(userObject as { [key: string]: string });
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
    <Container sx={{ transform: 'translateY(-50%)', minHeight: '50%' }}>
      <Box>
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
