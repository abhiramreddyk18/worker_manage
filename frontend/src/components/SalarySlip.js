import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

const SalarySlip = ({ salaryData }) => {
  const handleDownload = () => {
    const salaryDetails = `
      Employee ID: ${salaryData.employeeId}
      Basic Salary: ${salaryData.basicSalary}
      Overtime Pay: ${salaryData.overtimePay}
      Total Salary: ${salaryData.totalSalary}
    `;

    const blob = new Blob([salaryDetails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `Salary_Slip_${salaryData.employeeId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          Salary Slip
        </Typography>

        <Box sx={{ textAlign: "left", paddingLeft: 2 }}>
          <Typography variant="body1"><strong>Employee ID:</strong> {salaryData.employeeId}</Typography>
          <Typography variant="body1"><strong>Basic Salary:</strong> ${salaryData.basicSalary}</Typography>
          <Typography variant="body1"><strong>Overtime Pay:</strong> ${salaryData.overtimePay}</Typography>
          <Typography variant="body1"><strong>Total Salary:</strong> ${salaryData.totalSalary}</Typography>
        </Box>

        <Button 
          onClick={handleDownload} 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2, width: "100%" }}
        >
          Download Salary Slip
        </Button>
      </CardContent>
    </Card>
  );
};

export default SalarySlip;
