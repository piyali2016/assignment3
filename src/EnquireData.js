import { useState, useEffect } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Container} from '@mui/material';

function createData(id, coourseId, name, email, comment,courseName) {
  return { id, coourseId, name, email, comment, courseName };
}

export default function EnquireData() {
    const [rows, setrows] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3010/enquires')
      .then(response => response.json())
      .then(json => setrows(json))
  }, 
[]
);
console.log(rows);
  return (
    <Container>
    <h1>Enquiry Data list</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Coourse Id</TableCell>
            <TableCell align="right">Coourse Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.coourseId}</TableCell>
              <TableCell align="right">{row.courseName}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}