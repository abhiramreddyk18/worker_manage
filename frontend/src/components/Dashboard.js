import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container } from "@mui/material";
import Header from "../pages/Header";

const Dashboard = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/attendence/getattend");
      const data = await response.json();
      if (Array.isArray(data)) {
        setWorkers(data);
      } else {
        console.error("Expected an array but got:", data);
      }
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

  // Function to format date/time for better readability
  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString(); // Converts to local date and time format
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Header />
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: "40px" }}>
        Worker Dashboard
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#007bff" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Check-In Time</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Hours</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Payment</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Checked Out</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Active</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Created At</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Updated At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.map((worker, index) => (
              <TableRow key={index} hover>
                <TableCell>{worker.empId}</TableCell>
                <TableCell>{worker.name}</TableCell>
                <TableCell>{formatDate(worker.InTime)}</TableCell>
                <TableCell>{worker.hours}</TableCell>
                <TableCell>${worker.payment}</TableCell>
                <TableCell>{worker.out ? "Yes" : "No"}</TableCell>
                <TableCell>{worker.active ? "Yes" : "No"}</TableCell>
                <TableCell>{formatDate(worker.createdAt)}</TableCell>
                <TableCell>{formatDate(worker.updatedAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
