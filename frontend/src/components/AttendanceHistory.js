import React, { useEffect, useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography,
  Container, TextField, Button, Box
} from "@mui/material";
import Header from "../pages/Header";

const Dashboard = () => {
  const [workers, setWorkers] = useState([]);
  const [empIdFilter, setEmpIdFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetchWorkers(); // initially fetch all
  }, []);

  const fetchWorkers = async (filters = {}) => {
    try {
      let url = "http://localhost:8080/api/attendence/getattend";

      const params = new URLSearchParams(filters);
      if (params.toString()) {
        url += "?" + params.toString();
      }

      const response = await fetch(url);
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

  const handleSearch = () => {
    const filters = {};
    if (empIdFilter.trim()) filters.empId = empIdFilter.trim();
    if (dateFilter.trim()) filters.date = dateFilter.trim();
    fetchWorkers(filters);
  };

  const formatDate = (isoString) => {
    return new Date(isoString).toLocaleString();
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Header />
      <Typography variant="h4" align="center" gutterBottom sx={{ marginBottom: "40px" }}>
        Worker Dashboard
      </Typography>

      {/* Filter Section */}
      <Box display="flex" justifyContent="center" gap={2} mb={3}>
        <TextField
          label="Filter by Emp ID"
          variant="outlined"
          size="small"
          value={empIdFilter}
          onChange={(e) => setEmpIdFilter(e.target.value)}
        />
        <TextField
          label="Filter by Date"
          type="date"
          size="small"
          InputLabelProps={{ shrink: true }}
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        />
        <Button variant="contained" onClick={handleSearch}>Search</Button>
      </Box>

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
