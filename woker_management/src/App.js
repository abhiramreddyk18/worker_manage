
import './App.css';
import AttendanceHistory from './components/AttendanceHistory';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Link } from "react-router-dom";
import SalarySlip from './components/SalarySlip';
import LeaveRequest from './components/LeaveRequest';



function App() {
  return (
    <>
   
    
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
     
    </Routes>
   
  <nav>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
    </nav>
  
  </>
    




  );
}

export default App;
