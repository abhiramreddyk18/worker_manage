import React, { useEffect, useState } from "react";
import { getAttendanceData } from "../services/api";
import AttendanceTable from "../components/AttendanceTable";
import Filters from "../components/Filters";
import Header from "./Header";

// Attendance Tracking Component
const AttendanceTracking = () => {
  const [attendance, setAttendance] = useState([]);
  const [filters, setFilters] = useState({ date: "", employeeId: "", department: "" });

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
    <div style={containerStyle}>
      <Header />
      <div style={paperStyle}>
        <h2 style={headingStyle}>Attendance Tracking (Admin/HR)</h2>
        <Filters setFilters={setFilters} />
        <AttendanceTable attendance={attendance} />
      </div>
    </div>
  );
};

// Inline Styles
const containerStyle = {
  width: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const paperStyle = {
  width: "80%",
  backgroundColor: "#fff",
  padding: "20px",
  marginTop: "120px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  textAlign: "center",
};

const headingStyle = {
  fontSize: "24px",
  marginBottom: "20px",
};

export default AttendanceTracking;
