
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import { Link } from "react-router-dom";
import EmployeeSelfService from './pages/EmployeeSelfService';
import AttendanceHistory from './components/AttendanceHistory';
import Register from './pages/Register';
import AttendanceTracking from './pages/AttendanceTracking';
import Admin from './pages/Admin';



function App() {
  return (
    <>
   
    
    <Routes>
      <Route path="/" element={<Navigate to="/admin" />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />

      <Route path="/attendenceTreacking" element={<AttendanceTracking/>} />

      <Route path="/employself" element={<EmployeeSelfService/>} />

      <Route path="/admin" element={<Admin/>} />
      
      
     </Routes>
   
  </>
    




  );
}

export default App;
