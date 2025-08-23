import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function DevelopementTable(id, Amount, Profit, Loss, Pure_Precent, Pure_Loss) {
  return { id, Amount, Profit, Loss, Pure_Precent, Pure_Loss };
}

const rows = [
  DevelopementTable(1, 300, 159, 190, 0, 159 - 190),
  DevelopementTable(2, 500, 237, 98, 237 - 98, 0),
  DevelopementTable(3, 600, 262, 160, 267 - 160, 0),
  DevelopementTable(4, 500, 305, 377, 0, 305 - 377),
  DevelopementTable(5, 200, 356, 16.0, 365 - 16, 0),
];

export default function SimpleTable() {
  return (
    <TableContainer component={Paper} style={{ height: "100%", width: "100%" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Amount&nbsp;($)</TableCell>
            <TableCell align="right">Profit&nbsp;($)</TableCell>
            <TableCell align="right">Loss&nbsp;($)</TableCell>
            <TableCell align="right">Pure_Precent&nbsp;($)</TableCell>
            <TableCell align="right">Pure_Loss&nbsp;($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.Amount} </TableCell>
              <TableCell align="right">{row.Profit}</TableCell>
              <TableCell align="right">{row.Loss}</TableCell>
              <TableCell align="right">{row.Pure_Precent}</TableCell>
              <TableCell align="right">{row.Pure_Loss}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
