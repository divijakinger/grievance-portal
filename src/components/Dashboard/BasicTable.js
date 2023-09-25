import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import '../Dashboard/CSS/table.css'
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData('Bad Road Condition ', "RD314",'English','11/02/23 : 06:45:25'),
  createData('Fishing', 'FSH314','English','11/02/23 : 06:45:25'),
  createData('Finance', 'FS124', 'English','11/02/23 : 06:45:25'),
  createData('Finance', 'FS453', 'English','11/02/23 : 06:45:25'),
  createData('Fisheries', 'FSH134', 'English','11/02/23 : 06:45:25'),
];

export default function BasicTable() {
  const navigate=useNavigate()
  const handleClick=() => {
    navigate('/query')
  }
  return (
    <TableContainer component={Paper}>
      <Table   sx={{ minWidth: 1100 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell >Grievance </TableCell>
            <TableCell align="right">Grievance-No:</TableCell>
            <TableCell align="right">Language</TableCell>
            <TableCell align="right">Date - time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={handleClick}
            >
              <TableCell component="th" scope="row" onClick={handleClick}><Chip style={{marginRight: 10,}}color="success" label="Clickable"  />{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        );
}