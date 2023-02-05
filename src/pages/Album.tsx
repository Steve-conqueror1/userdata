import React from 'react';
import {
  Box,
  Container,
  Divider,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useActions, useTypedSelector } from '../hooks';

export const Album: React.FC = () => {
  const { id } = useParams();
  const actions = useActions();
  const { album, albumPhotos } = useTypedSelector((state) => state);

  React.useEffect(() => {
    actions.getAlbumApi({ albumId: Number(id) as number });
    actions.getAlbumPhotosApi({ albumId: Number(id) as number });
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Divider sx={{ marginBottom: '25px' }}>
          <strong>Album Info</strong>
        </Divider>
        <Box>
          <Typography gutterBottom variant="body1" component="div">
            <strong> Album ID:</strong> {album.id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong> Album Title:</strong> {album.title}
          </Typography>
        </Box>
        <Box sx={{ marginTop: '25px' }}>
          <Divider sx={{ marginBottom: '25px' }}>
            <strong>Album Photos</strong>
          </Divider>
        </Box>
        <ImageList cols={3} rowHeight="auto" sx={{ marginTop: '32px' }}>
          {albumPhotos.map((photo) => (
            <ImageListItem key={photo.id}>
              <img src={photo.url} alt={photo.title} loading="lazy" />
              <ImageListItemBar
                title={`${photo.title.substring(0, 29)}...`}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${photo.title}`}
                  >
                    <Link
                      variant="body1"
                      href={`/photos/${photo.id}`}
                      underline="hover"
                      sx={{ color: '#8FC35D' }}
                    >
                      View photo &rarr;
                    </Link>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Container>
  );
};
