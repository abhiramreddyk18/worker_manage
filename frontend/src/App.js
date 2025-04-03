
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";

import EmployeeSelfService from './pages/EmployeeSelfService';

import Register from './pages/Register';
import AttendanceTracking from './pages/AttendanceTracking';
import Admin from './pages/Admin';
import Charts from './pages/charts';
import Home from './pages/Home';
import Alogin from './pages/Alogin';
import AttendanceHistory from './components/AttendanceHistory';
import Employeestable from './pages/Employeestable';




function App() {
  return (
    <>
   
      <Routes>
    
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/attendenceTracking" element={<AttendanceTracking/>} />
      <Route path="/employself" element={<EmployeeSelfService/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/employee" element={<EmployeeSelfService/>} />
      <Route path="/charts" element={<Charts/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/adminlogin" element={<Alogin/>} />
      <Route path="/Employeelogin" element={<Login/>} />
      <Route path="/employeestable" element={<Employeestable/>} />
     
      
     </Routes>


    
   
  </>
    




  );
}

export default App;
