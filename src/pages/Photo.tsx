import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { useActions, useTypedSelector } from '../hooks';
import { useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

export const Photo: React.FC = () => {
  const actions = useActions();
  const { id } = useParams();
  const { photo } = useTypedSelector((state) => state);

  const [isEditting, setIsEditting] = React.useState(false);

  React.useEffect(() => {
    actions.getPhotoApi({ id: Number(id) as number });
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.setPhoto({ ...photo, title: event.currentTarget.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    actions.updatePhotosApi({ id: Number(id) as number, body: { ...photo } });
    setIsEditting(false);
  };

  return (
    <Container>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Divider sx={{ marginBottom: '25px' }}>
          <strong>Photo Information</strong>
        </Divider>
        <Box>
          <Typography variant="h6">
            <strong>Title: </strong> {photo.title} &nbsp;
            <Button
              onClick={() => setIsEditting(true)}
              variant="outlined"
              endIcon={<EditIcon color="primary" />}
            >
              Edit Title
            </Button>
          </Typography>
        </Box>
        {isEditting && (
          <Box>
            <form onSubmit={handleSubmit}>
              <Box sx={{ marginTop: '25px' }}>
                <TextField
                  value={photo.title}
                  sx={{ width: '90%' }}
                  onChange={handleChange}
                />
              </Box>

              <Box sx={{ marginTop: '25px' }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        )}
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
