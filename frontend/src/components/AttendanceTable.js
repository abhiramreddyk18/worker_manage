import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const AttendanceTable = ({ attendance }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Employee ID</strong></TableCell>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Department</strong></TableCell>
            <TableCell><strong>Date</strong></TableCell>
            <TableCell><strong>Entry Time</strong></TableCell>
            <TableCell><strong>Exit Time</strong></TableCell>
            <TableCell><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendance.map((entry, index) => (
            <TableRow key={index}>
              <TableCell>{entry.employeeId}</TableCell>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.department}</TableCell>
              <TableCell>{entry.date}</TableCell>
              <TableCell>{entry.entryTime}</TableCell>
              <TableCell>{entry.exitTime}</TableCell>
              <TableCell style={{ color: getStatusColor(entry.status) }}>
                {entry.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Late":
      return "red";
    case "Early Exit":
      return "orange";
    case "Overtime":
      return "green";
    default:
      return "black";
  }
};

export default AttendanceTable;
