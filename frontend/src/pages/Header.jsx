import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#1c1e21",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        padding: "10px 20px",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Brand Name */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: "1px",
            color: "#ffffff",
            cursor: "pointer",
            "&:hover": { color: "#ffcc00" },
          }}
        >
          WorkSync
        </Typography>

        {}
        <Box sx={{ display: "flex", gap: "20px" }}>
          {[
            { label: "InOut", path: "/admin" },
            { label: "Dashboard", path: "/dashboard" },
            { label: "Charts", path: "/charts" },
            { label: "Attendance History", path: "/attendencetracking" },
            { label: "Employees", path: "/employeestable" },
          ].map((item, index) => (
            <Typography
              key={index}
              component={Link}
              to={item.path}
              sx={{
                textDecoration: "none",
                color: "#f1f1f1",
                fontSize: "16px",
                fontWeight: "500",
                transition: "color 0.3s ease-in-out",
                "&:hover": { color: "#ffcc00" }, 
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
