import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

function Employeestable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Replace with your actual backend API endpoint
    axios.get("http://localhost:8080/api/authemp/employeedetails")
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch employees:", err);
      });
  }, []);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <Header />
      <h2 style={{ marginBottom: "20px", marginTop: "120px" }}>Employee Details</h2>
      <table
        style={{
          width: "95%",
          margin: "auto",
          borderCollapse: "collapse",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#007bff", color: "white" }}>
            <th style={tableHeaderStyle}>S.No</th>
            <th style={tableHeaderStyle}>Emp ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Salary</th>
            <th style={tableHeaderStyle}>Hourly Rate</th>
            <th style={tableHeaderStyle}>Work Hours</th>
            <th style={tableHeaderStyle}>Leaves</th>
            <th style={tableHeaderStyle}>Overtime</th>
            <th style={tableHeaderStyle}>Active</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={emp._id || index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#e3f2fd")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  index % 2 === 0 ? "#f8f9fa" : "#ffffff")
              }
            >
              <td style={tableCellStyle}>{index + 1}</td>
              <td style={tableCellStyle}>{emp.empId}</td>
              <td style={tableCellStyle}>{emp.name}</td>
              <td style={tableCellStyle}>{emp.email}</td>
              <td style={tableCellStyle}>${emp.salary}</td>
              <td style={tableCellStyle}>{emp.hourlyRate ?? "-"}</td>
              <td style={tableCellStyle}>{emp.totalWorkHours ?? "-"}</td>
              <td style={tableCellStyle}>{emp.totalLeaves ?? "-"}</td>
              <td style={tableCellStyle}>{emp.overtimeHours ?? "-"}</td>
              <td style={tableCellStyle}>{emp.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
};

export default Employeestable;
