import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const checkIn = (workerId, name) =>
  axios.post(`${API_URL}/check-in`, { workerId, name });

export const checkOut = (workerId) =>
  axios.post(`${API_URL}/check-out`, { workerId });

export const getWorkers = () =>
  axios.get(`${API_URL}/workers`);

export const getEmployeeData = async (employeeId) => {
  try {
    const response = await axios.get(`${API_URL}/employee/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching employee data", error);
    return null;
  }
};

export const requestLeave = async (employeeId, leaveData) => {
  try {
    const response = await axios.post(`${API_URL}/employee/${employeeId}/leave`, leaveData);
    return response.data;
  } catch (error) {
    console.error("Error requesting leave", error);
    return null;
  }
};