import React, { useState } from "react";
import { requestLeave } from "../services/api";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

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
    <Card sx={{ maxWidth: 500, margin: "20px auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom align="center">
          Apply for Leave
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            type="date"
            label="Leave Date"
            InputLabelProps={{ shrink: true }}
            value={leaveDate}
            onChange={(e) => setLeaveDate(e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Reason"
            multiline
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            fullWidth
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit Leave Request
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LeaveRequest;
