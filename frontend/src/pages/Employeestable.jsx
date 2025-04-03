import React from "react";
import Header from "./Header";

function Employeestable() {
  const employees = [
    { sno: 1, empId: "E101", name: "John Doe", email: "john@example.com", salary: "$5000" },
    { sno: 2, empId: "E102", name: "Jane Smith", email: "jane@example.com", salary: "$5200" },
    { sno: 3, empId: "E103", name: "Alice Brown", email: "alice@example.com", salary: "$5100" },
    { sno: 4, empId: "E104", name: "Bob Williams", email: "bob@example.com", salary: "$5300" },
  ];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
        <Header/>
      <h2 style={{ marginBottom: "20px",marginTop:"120px" }}>Employee Details</h2>
      <table
        style={{
          width: "80%",
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
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#f8f9fa" : "#ffffff",
                transition: "background 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e3f2fd")}
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f8f9fa" : "#ffffff")
              }
            >
              <td style={tableCellStyle}>{emp.sno}</td>
              <td style={tableCellStyle}>{emp.empId}</td>
              <td style={tableCellStyle}>{emp.name}</td>
              <td style={tableCellStyle}>{emp.email}</td>
              <td style={tableCellStyle}>{emp.salary}</td>
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
