import React, { useEffect, useState } from "react";
import axios from "axios";
import Eheader from "../components/Eheader";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";

const EmployeeSelfService = () => {
  const employeeId = "54409"; // Replace with dynamic employee ID from authentication
  const [employee, setEmployee] = useState(null);
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async (e) => {
      
      try {
         
        axios.defaults.withCredentials = true;

        
        
        const empResponse = await axios.get(`http://localhost:8080/api/authemp/userdetails`);
        const attendanceResponse = await axios.get(`http://localhost:8080/api/authemp/attenddetails`);
        setEmployee(empResponse.data);
        setAttendance(attendanceResponse.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeData();
  }, []);

  return (
    <div style={containerStyle}>
      <Eheader />
      <h2 style={titleStyle}>Employee Self-Service Portal</h2>

      {loading ? (
        <CircularProgress />
      ) : employee ? (
        <>
          {/* Employee Details */}
          <div style={cardStyle}>
            <h3 style={subtitleStyle}>Welcome, {employee.name}</h3>
            <div style={infoGridStyle}>
              <p><strong>Employee ID:</strong> {employee.empId}</p>
              <p><strong>Email:</strong> {employee.email}</p>
              <p><strong>Role:</strong> {employee.role}</p>
              <p><strong>Hourly Rate:</strong> ${employee.hourlyRate}</p>
              <p><strong>Total Work Hours:</strong> {employee.totalWorkHours}</p>
              <p><strong>Total Leaves:</strong> {employee.totalLeaves}</p>
              <p><strong>Overtime Hours:</strong> {employee.overtimeHours}</p>
              <p><strong>Active:</strong> {employee.isActive ? "Yes" : "No"}</p>
            </div>
          </div>

          {/* Attendance Table */}
          <div style={pageCardStyle}>
            <h3 style={cardTitleStyle}>Attendance History</h3>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><strong>Date</strong></TableCell>
                    <TableCell><strong>In Time</strong></TableCell>
                    <TableCell><strong>Out Time</strong></TableCell>
                    <TableCell><strong>Hours Worked</strong></TableCell>
                    <TableCell><strong>Payment</strong></TableCell>
                    <TableCell><strong>Status</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendance.length > 0 ? (
                    attendance.map((record) => (
                      <TableRow key={record._id}>
                        <TableCell>{new Date(record.InTime).toLocaleDateString()}</TableCell>
                        <TableCell>{new Date(record.InTime).toLocaleTimeString()}</TableCell>
                        <TableCell>{record.OutTime ? new Date(record.OutTime).toLocaleTimeString() : "Still Working"}</TableCell>
                        <TableCell>{record.hours.toFixed(2)}</TableCell>
                        <TableCell>${record.payment.toFixed(2)}</TableCell>
                        <TableCell>{record.out ? "Checked Out" : "Active"}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} style={{ textAlign: "center" }}>No attendance records found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>Employee not found.</p>
      )}
    </div>
  );
};

// Layout & Styling
const containerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#ECEFF1",
  padding: "20px",
  minHeight: "100vh",
  marginTop: "100px",
};

const cardStyle = {
  width: "90%",
  maxWidth: "1000px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  marginBottom: "30px",
};

const pageCardStyle = {
  width: "90%",
  maxWidth: "1200px",
  backgroundColor: "#FFFFFF",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  marginBottom: "40px",
};

const titleStyle = {
  fontSize: "26px",
  fontWeight: "bold",
  color: "#263238",
  marginBottom: "20px",
};

const subtitleStyle = {
  fontSize: "22px",
  color: "#4DB6AC",
  marginBottom: "15px",
};

const cardTitleStyle = {
  fontSize: "20px",
  color: "#37474F",
  marginBottom: "15px",
};

const infoGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "12px",
  textAlign: "left",
  fontSize: "16px",
  color: "#444",
  padding: "12px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
};

export default EmployeeSelfService;
