import React from 'react';
import { Box, Container, Link as MuiLink, Typography } from '@mui/material';

export const LandingPage: React.FC = () => {
  return (
    <Container sx={{ minHeight: 'auto' }}>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant="h3">Welcome to userata test app</Typography>
        </Box>

        <Box sx={{ marginTop: '16px' }}>
          <Typography variant="body1">
            This app makes use of publicly avalable api jsonplaceholder
            available on this link &nbsp;
            <MuiLink
              variant="body2"
              color="primary"
              href="https://jsonplaceholder.typicode.com/"
              target="_blank"
              underline="hover"
            >
              https://jsonplaceholder.typicode.com/
            </MuiLink>{' '}
            &nbsp; to consume available data. In the app, various data will be
            fetched and displayed. You can view different users and specific
            user information, albums and their photos and much more.
          </Typography>
        </Box>

        <Box sx={{ marginTop: '16px' }}>
          <Typography>
            View users{' '}
            <MuiLink
              variant="h6"
              color="primary"
              href="/users"
              underline="hover"
            >
              here &rarr;
            </MuiLink>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
