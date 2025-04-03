import React, { useEffect, useState } from "react";
import { getEmployeeData, requestLeave } from "../services/api";
import AttendanceHistory from "../components/AttendanceHistory";
import SalarySlip from "../components/SalarySlip";
import LeaveRequest from "../components/LeaveRequest";

const EmployeeSelfService = () => {
  const employeeId = "EMP123"; // Example Employee ID (Replace with dynamic ID from auth)
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    async function fetchEmployeeData() {
      const data = await getEmployeeData(employeeId);
      setEmployee(data);
    }
    fetchEmployeeData();
  }, []);

  return (
    <div className="container">
      <h2>Employee Self-Service Portal</h2>
      {employee ? (
        <>
          <h3>Welcome, {employee.name}</h3>
          <p><strong>Employee ID:</strong> {employee.id}</p>
          <p><strong>Position:</strong> {employee.position}</p>
          <p><strong>Total Hours Worked:</strong> {employee.totalHours}</p>
          <p><strong>Overtime:</strong> {employee.overtimeHours} hours</p>

          <AttendanceHistory attendance={employee.attendance} />
          <SalarySlip salaryData={employee.salary} />
          <LeaveRequest employeeId={employeeId} />
        </>
      ) : (
        <p>Loading employee details...</p>
      )}
    </div>
  );
};

export default EmployeeSelfService;
