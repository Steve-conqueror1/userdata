import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Paper,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

type Props = {
  headers: string[];
  children: React.ReactNode;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#550E9B',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const AppTable: React.FC<Props> = (props) => {
  const { headers, children } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{headers[0]}</StyledTableCell>
            {headers
              .filter((header, index) => index !== 0)
              .map((header, index) => {
                return (
                  <StyledTableCell align="right">{header}</StyledTableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};
