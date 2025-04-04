import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import rbg from "../assets/registerbg.jpg";
const Alogin = () => {
   const Navigate=useNavigate()
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      e.preventDefault();
      axios.default.withCredentials=true;

      const user={
        
        empId:userId,
        email:password
      }

      console.log(user);
      const result=await axios.post('http://localhost:8080/api/admin/login',
        user,{withCredentials:true}
      )
      console.log(result.data);

    setTimeout(()=>{
      Navigate("/admin")
    },2000)
    } catch (error) {
      console.log("error in adminlogin");
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
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
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
                type="email"
                placeholder="Enter email"
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
