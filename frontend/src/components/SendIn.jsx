import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography, Paper } from "@mui/material";

const SendIn = ({ page, setPage }) => {
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId);

    // Navigate to the scanner after login
    setPage("scanner");
  };

  return (
    <Container maxWidth="xs" sx={{height:"90vh",width:'100dvw',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Paper elevation={3} sx={{ padding: 3, mt: 8, textAlign: "center", borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
            SendIn
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User ID"
            variant="outlined"
            fullWidth
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Button variant="outlined" color="secondary" fullWidth onClick={() => setPage("scanner")}>
            Go to Scanner
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SendIn;
