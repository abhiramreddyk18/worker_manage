import React, { useEffect, useState } from "react";
import { getWorkers } from "../services/api";
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Typography, Container 
} from "@mui/material";

const Dashboard = () => {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const { data } = await getWorkers();
      setWorkers(data);
    } catch (error) {
      console.error("Error fetching workers:", error);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Worker Dashboard
      </Typography>
      <TableContainer component={Paper} elevation={3}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#007bff" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Check-In Time</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Check-Out Time</TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>Money Earned</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {workers.map((worker) => (
              <TableRow key={worker.workerId} hover>
                <TableCell>{worker.workerId}</TableCell>
                <TableCell>{worker.name}</TableCell>
                <TableCell>{worker.checkInTime}</TableCell>
                <TableCell>{worker.checkOutTime || "Still Working"}</TableCell>
                <TableCell>${worker.dailyWage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Dashboard;
