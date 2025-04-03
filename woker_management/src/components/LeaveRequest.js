import React, { useState } from "react";
import { requestLeave } from "../services/api";

const LeaveRequest = ({ employeeId }) => {
  const [leaveDate, setLeaveDate] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await requestLeave(employeeId, { leaveDate, reason });
    if (success) {
      alert("Leave request submitted successfully!");
      setLeaveDate("");
      setReason("");
    } else {
      alert("Failed to submit leave request.");
    }
  };

  return (
    <div className="card">
      <h3>Apply for Leave</h3>
      <form onSubmit={handleSubmit}>
        <label>Date:</label>
        <input type="date" value={leaveDate} onChange={(e) => setLeaveDate(e.target.value)} required />
        
        <label>Reason:</label>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />

        <button type="submit">Submit Leave Request</button>
      </form>
    </div>
  );
};

export default LeaveRequest;
