import React from 'react';
import { Box, Container, List, Typography } from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import { FooterListItem } from '../FooterListItem';
import { EMAIL, GITHUB, LINKEDIN, TELEGRAM } from '../../helpers';
import { useMediaQuery } from '@mui/material';

export const Footer: React.FC = () => {
  const matches = useMediaQuery('(max-width: 600px)');

  return (
    <Box
      sx={{
        marginTop: '64px',
        margin: 'auto 0',
        background: '#000',
        padding: '16px',
        position: 'absolute',
        bottom: '0',
        right: '0',
        left: '0',
      }}
    >
      <Container sx={{ color: '#fff' }}>
        <Box
          className="footer"
          sx={{
            display: 'flex',
            flexDirection: matches ? 'column' : 'row',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography variant="h6">Contact Info</Typography>
            <List>
              <FooterListItem url={LINKEDIN} primary={'LinkedIn'}>
                <LinkedInIcon style={{ color: '#0077b5' }} />
              </FooterListItem>
              <FooterListItem url={GITHUB} primary={'Github'}>
                <GitHubIcon style={{ color: '#171515' }} />
              </FooterListItem>
              <FooterListItem url={TELEGRAM} primary={'Telegram'}>
                <TelegramIcon style={{ color: '#229ed9' }} />
              </FooterListItem>
              <FooterListItem url={EMAIL} primary={'Email'}>
                <GoogleIcon style={{ color: '#c71610' }} />
              </FooterListItem>
            </List>
          </Box>
          <Box sx={{ marginTop: '26px' }}>
            <Typography variant="h6">Copyright</Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: '16px', color: '#BADA9B' }}
            >
              &copy; Savannah frontend engineer test task 2023
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
