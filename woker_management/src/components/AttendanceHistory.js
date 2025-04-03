import React from "react";


const AttendanceHistory = ({ attendance }) => {
  return (
    <div className="card">
      <h3>Attendance History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Hours Worked</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.checkIn}</td>
              <td>{entry.checkOut}</td>
              <td>{entry.hoursWorked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;
