import React, { useEffect, useState } from "react";
import { getAttendanceData } from "../services/api";
import AttendanceTable from "../components/AttendanceTable";
import Filters from "../components/Filters";
import { Container, Typography, Paper } from "@mui/material";
// attendence table, filters
const AttendanceTracking = () => {
  const [attendance, setAttendance] = useState([]);
  const [filters, setFilters] = useState({ date: "", employeeId: "", department: "" });

//   useEffect(() => {
//     async function fetchAttendance() {
//       const data = await getAttendanceData(filters);
//       setAttendance(data);
//     }
//     fetchAttendance();
//   }, [filters]);
 // Fake Attendance Data
 const fakeAttendanceData = [
    { date: "2024-04-01", employeeId: "EMP123", name: "John Doe", department: "Engineering", status: "On Time" },
    { date: "2024-04-01", employeeId: "EMP456", name: "Jane Smith", department: "HR", status: "Late" },
    { date: "2024-04-02", employeeId: "EMP123", name: "John Doe", department: "Engineering", status: "Overtime" },
    { date: "2024-04-02", employeeId: "EMP789", name: "Mike Johnson", department: "Finance", status: "Absent" },
    { date: "2024-04-03", employeeId: "EMP456", name: "Jane Smith", department: "HR", status: "On Time" },
    { date: "2024-04-03", employeeId: "EMP789", name: "Mike Johnson", department: "Finance", status: "On Time" },
  ];

  useEffect(() => {
    // Filtering based on selected filters
    const filteredData = fakeAttendanceData.filter((record) => {
      return (
        (!filters.date || record.date === filters.date) &&
        (!filters.employeeId || record.employeeId.includes(filters.employeeId)) &&
        (!filters.department || record.department.includes(filters.department))
      );
    });

    setAttendance(filteredData);
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
