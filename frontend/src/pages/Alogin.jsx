import React, { useState } from "react";

import rbg from "../assets/registerbg.jpg";
const Alogin = () => {
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
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              padding: "30px",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              width: "350px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "20px", fontSize: "24px", color: "#333" }}>
             Admin Login
            </h2>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter User Id"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
              
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  margin: "10px 0",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  fontSize: "16px",
                }}
              />
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "18px",
                  cursor: "pointer",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#0056b3")}
                onMouseOut={(e) => (e.target.style.background = "#007bff")}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
  );
};

export default Alogin;
