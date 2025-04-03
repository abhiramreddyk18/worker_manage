import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

const AttendanceHistory = ({ attendance }) => {
  return (
    <Card sx={{ maxWidth: 800, margin: "20px auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          Attendance History
        </Typography>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#007bff" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Date</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Check-in</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Check-out</TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>Hours Worked</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendance.map((entry, index) => (
                <TableRow key={index} hover>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.checkIn}</TableCell>
                  <TableCell>{entry.checkOut || "Still Working"}</TableCell>
                  <TableCell>{entry.hoursWorked}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default AttendanceHistory;
