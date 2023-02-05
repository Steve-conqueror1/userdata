import React, { useEffect } from 'react';
import { Box, Container, Link, TableRow, Typography } from '@mui/material';
import { AppTable } from '../components/AppTable';
import { useActions, useTypedSelector } from '../hooks';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const headers = [
  'Name',
  'UserName',
  'Email',
  'City',
  'Phone',
  'Company',
  'Website',
  '№ of Albums',
];

export const Home: React.FC = () => {
  const { users, albums } = useTypedSelector((state) => state);
  const actions = useActions();

  useEffect(() => {
    actions.getUsersApi();
    actions.getAlbumsApi();
  }, []);

  const getUserAlbumsCount = (userId: number) => {
    return albums.filter((album) => album.userId === userId).length;
  };

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#550E9B',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <Container sx={{ minHeight: 'auto' }}>
      <Box sx={{ minHeight: 'auto', margin: '180px 0 360px 0' }}>
        <Box sx={{ marginBottom: '40px' }}>
          <Typography variant="h3">Welcome to users list </Typography>
        </Box>
        <Box>
          <AppTable headers={headers}>
            {users.map((user) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell component="th" scope="row">
                  <Link
                    variant="body1"
                    color="primary"
                    href={`/users/${user.id}`}
                    underline="hover"
                  >
                    {user.name}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">{user.username}</StyledTableCell>
                <StyledTableCell align="right">{user.email}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.address.city}
                </StyledTableCell>
                <StyledTableCell align="right">{user.phone}</StyledTableCell>
                <StyledTableCell align="right">
                  {user.company.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Link color="primary" href="#" underline="hover">
                    {user.website}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {getUserAlbumsCount(user.id)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </AppTable>
        </Box>
      </Box>
    </Container>
  );
};
