import React, { useState } from "react";
import rbg from "../assets/registerbg.jpg";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User ID:", userId, "Password:", password);
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
