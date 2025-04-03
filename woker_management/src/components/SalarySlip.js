import React from "react";

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
    a.download = "salary_slip.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="card">
      <h3>Salary Slip</h3>
      <p><strong>Basic Salary:</strong> ${salaryData.basicSalary}</p>
      <p><strong>Overtime Pay:</strong> ${salaryData.overtimePay}</p>
      <p><strong>Total Salary:</strong> ${salaryData.totalSalary}</p>
      <button onClick={handleDownload}>Download Salary Slip</button>
    </div>
  );
};

export default SalarySlip;
