import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#2c3e50", padding: "0px",position:"fixed",top:"0",left:"0",margin:"0"}}>
      <Toolbar>
        {/* Left Side - Home */}
        <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: "1px", cursor: "pointer" }}
        >
          WorkSync
        </Typography>

        {/* Right Side - Navigation */}
        <Box>
          <Button color="inherit" sx={{ mx: 1, textTransform: "none" }}>InOut</Button>
          <Button color="inherit" sx={{ mx: 1, textTransform: "none" }}>DashBoard</Button>
          <Button color="inherit" sx={{ mx: 1, textTransform: "none" }}>Charts</Button>
          <Button color="inherit" sx={{ mx: 1, textTransform: "none" }}>Attendence History</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
