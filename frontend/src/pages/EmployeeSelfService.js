import React, { useEffect, useState } from "react";
import AttendanceHistory from "../components/AttendanceHistory";
import SalarySlip from "../components/SalarySlip";
import LeaveRequest from "../components/LeaveRequest";
import Eheader from "../components/Eheader";

const EmployeeSelfService = () => {
  const employeeId = "EMP123"; // Example Employee ID (Replace with dynamic ID from auth)
  const [employee, setEmployee] = useState(null);

  const fakeEmployees = [
    {
      id: "EMP123",
      name: "John Doe",
      position: "Software Engineer",
      totalHours: 160,
      overtimeHours: 10,
      attendance: [
        { date: "2024-04-01", entryTime: "09:00 AM", exitTime: "06:00 PM", status: "On Time" },
        { date: "2024-04-02", entryTime: "09:30 AM", exitTime: "06:15 PM", status: "Late" },
        { date: "2024-04-03", entryTime: "08:50 AM", exitTime: "07:00 PM", status: "Overtime" },
      ],
      salary: {
        month: "March 2024",
        baseSalary: 5000,
        overtimePay: 200,
        totalSalary: 5200,
      },
    },
  ];

  useEffect(() => {
    const data = fakeEmployees.find((emp) => emp.id === employeeId) || null;
    setEmployee(data);
  }, []);

  return (
    <div style={containerStyle}>
      <Eheader />
      <h2 style={titleStyle}>Employee Self-Service Portal</h2>

      {employee ? (
        <>
          <div style={cardStyle}>
            <h3 style={subtitleStyle}>Welcome, {employee.name}</h3>
            <div style={infoGridStyle}>
              <p><strong>Employee ID:</strong> {employee.id}</p>
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Total Hours Worked:</strong> {employee.totalHours}</p>
              <p><strong>Overtime:</strong> {employee.overtimeHours} hours</p>
            </div>
          </div>

          <div style={pageCardStyle}>
            <h3 style={cardTitleStyle}>Attendance History</h3>
            <AttendanceHistory attendance={employee.attendance} />
          </div>

          <div style={pageCardStyle}>
            <h3 style={cardTitleStyle}>Salary Slip</h3>
            <SalarySlip salaryData={employee.salary} />
          </div>

          <div style={pageCardStyle}>
            <h3 style={cardTitleStyle}>Leave Request</h3>
            <LeaveRequest employeeId={employeeId} />
          </div>
        </>
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#666" }}>Loading employee details...</p>
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
  backgroundColor: "#ECEFF145",
  padding: "20px",
  minHeight: "100vh",
  marginTop:"100px"
};

const cardStyle = {
  width: "90%", // Increased width
  maxWidth: "1000px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  marginBottom: "30px", // Space between cards
};

const pageCardStyle = {
  width: "90%", // Wider cards
  maxWidth: "1200px", // Increased width for a page-like feel
  backgroundColor: "#FFFFFF",
  padding: "25px",
  borderRadius: "12px",
  boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  marginBottom: "40px", // More space between sections
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
