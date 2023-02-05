import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Link,
  TableRow,
  Typography,
} from '@mui/material';
import { useActions, useTypedSelector } from '../hooks';
import { AppTable } from '../components';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#550E9B',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },

  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const User: React.FC = () => {
  const { user, userAlbums } = useTypedSelector((state) => state);
  const actions = useActions();
  const { id } = useParams();

  React.useEffect(() => {
    actions.getUserApi({ userId: Number(id) as number });
    actions.getUserAlbumsApi({ userId: Number(id) as number });
  }, []);

  if (!user.name || !userAlbums) {
    return null;
  }

  return (
    <Container sx={{ minHeight: 'auto' }}>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                <strong>Name:</strong> {user.name}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                <strong> Username: </strong>
                {user.username}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                <strong> Email:</strong> {user.email}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                <strong> Phone:</strong> {user.phone}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                <strong> Website:</strong> {user.website}
              </Typography>
              <Box sx={{ marginTop: '25px' }}>
                <Divider sx={{ marginBottom: '25px' }}>
                  <strong>Company</strong>
                </Divider>

                <Typography gutterBottom variant="body1" component="div">
                  <strong> Company Name:</strong> {user.company.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong> Company Name:</strong> {user.company.name}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                <strong> Company Phrase:</strong> {user.company.catchPhrase}
              </Typography>
              <Box sx={{ marginTop: '25px' }}>
                <Divider sx={{ margin: '25px 0' }}>
                  <strong>Address</strong>
                </Divider>
                <Typography variant="body2" color="text.secondary">
                  <strong> City:</strong> {user.address.city}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong> Street:</strong> {user.address.street}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong> ZipCode:</strong> {user.address.zipCode}
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>

        <Divider sx={{ margin: '25px 0' }}>
          <Typography variant="h6">
            <strong>{`${user.name}'s albums table`}</strong>
          </Typography>
        </Divider>

        <AppTable headers={['AlbumId', 'Title']}>
          {userAlbums.map((album) => (
            <StyledTableRow key={album.userId}>
              <StyledTableCell component="th" scope="row">
                <Link
                  variant="body1"
                  color="primary"
                  href={`/albums/${album.id}`}
                  underline="hover"
                >
                  {album.id}
                </Link>
              </StyledTableCell>
              <StyledTableCell>{album.title}</StyledTableCell>
            </StyledTableRow>
          ))}
        </AppTable>
      </Box>
    </Container>
  );
};
