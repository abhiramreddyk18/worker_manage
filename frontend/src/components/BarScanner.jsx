import React, { useEffect, useRef, useState } from "react";
import axios from 'axios'
import Quagga from "quagga";
import { Button,Box } from "@mui/material";
import { use } from "react";

const BarScanner = ({ page, setPage }) => {
  const [barcode, setBarcode] = useState(null);
  const videoRef = useRef(null);

  

    // try {
    //   const result=axios.post('localhost:8080/api/attendence/ingoing', {empId:barcode});
    //   console.log(result.data.message);
    // } catch (error) {
    //   console.log("error occur in sending")
    // }


 



  useEffect(() => {
    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: videoRef.current, // Attach video stream
          constraints: {
            width: 320,
            height: 240,
            facingMode: "environment", // Use rear camera
          },
        },
        decoder: {
          readers: ["code_128_reader", "ean_reader", "ean_8_reader"], // Supported formats
        },
      },
      (err) => {
        if (err) {
          console.error("Quagga initialization failed:", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      setBarcode(data.codeResult.code);
      Quagga.stop(); // Stop scanning after detecting a barcode
    });

    return () => {
      Quagga.stop();
    };
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      width:"100dvw",
      textAlign: "center",
      padding:0,
      margin:0
    }}>
      <h1 style={{color:"white"}}>Track User</h1>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
      }}>
        <div ref={videoRef} style={{
          width: "320px",
          height: "240px",
          backgroundColor: "black" // Added for better visibility
        }}></div>
      </div>
      {barcode &&  <p>Scanned Code: {barcode}</p>}
    

    <div>
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2, }}>
        <Button variant="contained" color="primary" onClick={() => setPage("sendout")}>
        Send Out
        </Button>
        <Button variant="contained" color="secondary" onClick={() => setPage("sendin")}>
        Send In
        </Button>
    </Box>
    </div>

        

    </div>
  );
};

export default BarScanner;
