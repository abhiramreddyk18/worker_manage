import React, { useEffect, useState } from "react";
import { getAttendanceData } from "../services/api";
import AttendanceTable from "../components/AttendanceTable";
import Filters from "../components/Filters";
import { Container, Typography, Paper } from "@mui/material";

const AttendanceTracking = () => {
  const [attendance, setAttendance] = useState([]);
  const [filters, setFilters] = useState({ date: "", employeeId: "", department: "" });

  useEffect(() => {
    async function fetchAttendance() {
      const data = await getAttendanceData(filters);
      setAttendance(data);
    }
    fetchAttendance();
  }, [filters]);

  return (
    <Container>
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          Attendance Tracking (Admin/HR)
        </Typography>
        <Filters setFilters={setFilters} />
        <AttendanceTable attendance={attendance} />
      </Paper>
    </Container>
  );
};

export default AttendanceTracking;
