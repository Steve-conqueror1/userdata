import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

export const LoginPage: React.FC = () => {
  return (
    <Box sx={{ marginTop: '100px' }}>
      <Container>
        <Box>
          <Typography variant="h5">Please Login</Typography>
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
            startIcon={<GoogleIcon style={{ color: '#db4437' }} />}
            variant="outlined"
            size="large"
          >
            Login with google
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
