import React, { useState } from "react";
import rbg from "../assets/registerbg.jpg";
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Login = () => {
  const Navigate=useNavigate()
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("User ID:", userId, "Password:", password);
    try {
      e.preventDefault();
      axios.default.withCredentials=true;

      const user={
        
        empId:userId,
        password:password
      }

      console.log(user);
      const result=await axios.post('http://localhost:8080/api/authemp/login',
        user,{withCredentials:true}
      )
      console.log(result.data);

    setTimeout(()=>{
      Navigate("/employee")
    },2000)
    } catch (error) {
      console.log("error in registration");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${rbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        flexDirection:"column"
      }}
    >
      <div
        style={{
          background: "rgba(20, 20, 20, 0.9)", // Dark card with transparency
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.6)",
          width: "350px",
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(8px)", // Smooth blur effect
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "24px",
            color: "#f0f0f0", // Light gray text
          }}
        >
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.background = "#ffbb00")}
            onMouseOut={(e) => (e.target.style.background = "#ff9900")}
          >
            Submit
          </button>
          
        </form>
      
      </div>
      <Link style={{ padding: "15px 30px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "bold",marginTop:"40px" }} to="/register">
  SignUp
</Link>

    </div>
  );
};

// **Styles**
const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "10px 0",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: "5px",
  fontSize: "16px",
  background: "rgba(255, 255, 255, 0.1)", // Dark translucent input
  color: "#f0f0f0",
  outline: "none",
  transition: "0.3s",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#ff9900", // Neon orange
  color: "white",
  border: "none",
  borderRadius: "5px",
  fontSize: "18px",
  cursor: "pointer",
  transition: "0.3s",
};

export default Login;
