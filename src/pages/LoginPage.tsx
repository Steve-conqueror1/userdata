import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage: React.FC = () => {
  return (
    <Container sx={{ transform: 'translateY(-50%)' }}>
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
          <Button
            sx={{ background: '#4285F4', marginTop: '20px' }}
            startIcon={<GoogleIcon style={{ color: '#db4437' }} />}
            variant="contained"
            size="large"
          >
            Login with google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
