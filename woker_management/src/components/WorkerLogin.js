import React, { useState } from "react";
import { checkIn, checkOut } from "../services/api";

const WorkerLogin = () => {
  const [workerId, setWorkerId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleCheckIn = async () => {
    try {
      await checkIn(workerId, name);
      setStatus("Checked In Successfully");
    } catch (error) {
      setStatus("Error: Unable to Check-in");
    }
  };

  const handleCheckOut = async () => {
    try {
      await checkOut(workerId);
      setStatus("Checked Out Successfully");
    } catch (error) {
      setStatus("Error: Unable to Check-out");
    }
  };

  return (
    <div class="worker-login">
    <h2>Worker Attendance</h2>
    <input class="worker-login-input"
      type="text"
      value={workerId}
      onChange={(e) => setWorkerId(e.target.value)}
      placeholder="Enter Worker ID"
    />
    <input class="worker-login-input"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Worker Name"
    />
    <button class="worker-login-button">Check-In</button>
    <button class="worker-login-button">Check-Out</button>
    <p class="worker-login-status">{status}</p>
  </div>
   
  );
};

export default WorkerLogin;
