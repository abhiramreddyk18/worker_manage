import React, { useState } from "react";
import { TextField, Button, Grid, Card, CardContent, Typography } from "@mui/material";

const Filters = ({ setFilters }) => {
  const [date, setDate] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [department, setDepartment] = useState("");

  const handleFilterChange = () => {
    setFilters({ date, employeeId, department });
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Filter Employees
        </Typography>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              type="date"
              label="Date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Employee ID"
              fullWidth
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Department"
              fullWidth
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleFilterChange}
              fullWidth
              sx={{ mt: 1 }}
            >
              Apply Filters
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Filters;
