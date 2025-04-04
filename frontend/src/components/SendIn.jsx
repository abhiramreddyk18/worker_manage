import React, { useState } from "react";
import { TextField, Button, Container, Box, Typography, Paper } from "@mui/material";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const SendIn = ({ page, setPage }) => {
  const [userId, setUserId] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      e.preventDefault();
      axios.default.withCredentials=true;

      const user={
        
        empId:userId,
      }

      console.log(user);
      const result=await axios.post('http://localhost:8080/api/attendence/incoming',
        user,{withCredentials:true}
      )
      console.log(result.data);

    
    } catch (error) {
      console.log("error in adminlogin");
    }
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
