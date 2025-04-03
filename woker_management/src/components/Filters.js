import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const Filters = ({ setFilters }) => {
  const [date, setDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");

  const handleFilterChange = () => {
    setFilters({ date, employeeId, department });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: "20px" }}>
      <Grid item xs={4}>
        <TextField
          type="date"
          label="Date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Employee ID"
          fullWidth
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          label="Department"
          fullWidth
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleFilterChange} fullWidth>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
