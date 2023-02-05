import React from 'react';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { useActions, useTypedSelector } from '../hooks';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export const Photo: React.FC = () => {
  const actions = useActions();
  const { id } = useParams();
  const { photo } = useTypedSelector((state) => state);

  React.useEffect(() => {
    actions.getPhotoApi({ id: Number(id) as number });
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Divider sx={{ marginBottom: '25px' }}>
          <strong>Photo Information</strong>
        </Divider>
        <Box>
          <Typography variant="h6">
            <strong>Title: </strong> {photo.title} &nbsp;
            <Button variant="outlined" endIcon={<EditIcon color="primary" />}>
              Edit Title
            </Button>
          </Typography>
        </Box>
        <Box>
          <img
            style={{ marginTop: '25px' }}
            width="100%"
            src={photo.url}
            alt=""
          />
        </Box>
      </Box>
    </Container>
  );
};
