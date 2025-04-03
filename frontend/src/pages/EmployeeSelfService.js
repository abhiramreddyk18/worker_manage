import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Box } from "@mui/material";
import AttendanceHistory from "../components/AttendanceHistory";
import SalarySlip from "../components/SalarySlip";
import LeaveRequest from "../components/LeaveRequest";

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
    {
      id: "EMP456",
      name: "Jane Smith",
      position: "HR Manager",
      totalHours: 170,
      overtimeHours: 5,
      attendance: [
        { date: "2024-04-01", entryTime: "08:45 AM", exitTime: "06:00 PM", status: "On Time" },
        { date: "2024-04-02", entryTime: "09:15 AM", exitTime: "06:30 PM", status: "Late" },
      ],
      salary: {
        month: "March 2024",
        baseSalary: 6000,
        overtimePay: 100,
        totalSalary: 6100,
      },
    },
  ];

  useEffect(() => {
    const data = fakeEmployees.find(emp => emp.id === employeeId) || null;
    setEmployee(data);
  }, []);

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 4 }}>
      <Card sx={{ boxShadow: 3, p: 2 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Employee Self-Service Portal
          </Typography>

          {employee ? (
            <>
              <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                Welcome, {employee.name}
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography><strong>Employee ID:</strong> {employee.id}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography><strong>Position:</strong> {employee.position}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography><strong>Total Hours Worked:</strong> {employee.totalHours}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography><strong>Overtime:</strong> {employee.overtimeHours} hours</Typography>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3 }}>
                <AttendanceHistory attendance={employee.attendance} />
              </Box>
              <Box sx={{ mt: 3 }}>
                <SalarySlip salaryData={employee.salary} />
              </Box>
              <Box sx={{ mt: 3 }}>
                <LeaveRequest employeeId={employeeId} />
              </Box>
            </>
          ) : (
            <Typography align="center">Loading employee details...</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeSelfService;
