import React from "react";
import { Link } from "react-router-dom";
import rbg from "../assets/registerbg.jpg";

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${rbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor:" #1a1a2e", // Slight transparency
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          padding: "15px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1000,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#ffffff",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out, color 0.3s ease-in-out",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#ffcc00";
            e.target.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#ffffff";
            e.target.style.transform = "scale(1)";
          }}
        >
          WorkSync
        </div>

        <nav style={{ display: "flex", gap: "20px" }}>
          {["Admin", "Employee"].map((role, index) => (
            <Link
              key={index}
              to={`/${role.toLowerCase()}login`}
              style={{
                textDecoration: "none",
                color: "#f1f1f1",
                fontSize: "16px",
                fontWeight: "500",
                transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => {
                e.target.style.color = "#ffcc00";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.color = "#f1f1f1";
                e.target.style.transform = "scale(1)";
              }}
            >
              {role}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content Section */}
      <main
        style={{
          marginTop: "180px",
          padding: "40px",
          textAlign: "center",
          color: "#fff",
          minHeight: "100vh",
          backdropFilter: "blur(5px)", // Blurred effect for readability
          // Dark overlay
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Welcome to WorkSync</h1>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          WorkSync is a <strong>Worker Management System</strong> designed to efficiently
          manage <strong>industrial workers, their salaries, and attendance</strong>.
          Our platform helps industries streamline worker records, ensuring smooth operations.
        </p>

        {/* Features Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          {["Worker Management", "Salary Management", "Attendance Tracking"].map(
            (feature, index) => (
              <div
                key={index}
                style={{
                  width: "300px",
                  padding: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "10px",
                  textAlign: "left",
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
                }}
              >
                <h3 style={{ color: "#1c1e21" }}>{feature}</h3>
                <p style={{ color: "#555" }}>
                  {index === 0 && "Track worker details, roles, and responsibilities in real time."}
                  {index === 1 && "Automate salary calculations and generate payslips effortlessly."}
                  {index === 2 && "Monitor worker attendance, track leaves, and ensure accurate records."}
                </p>
              </div>
            )
          )}
        </div>

        {/* Call to Action */}
        <div style={{ marginTop: "40px" }}>
          <Link
            to="/login"
            style={{
              padding: "14px 28px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              fontSize: "18px",
              borderRadius: "8px",
              display: "inline-block",
              transition: "background 0.3s, transform 0.3s",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0056b3";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#007bff";
              e.target.style.transform = "scale(1)";
            }}
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
