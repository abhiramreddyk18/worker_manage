import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const checkIn = (workerId, name) =>
  axios.post(`${API_URL}/check-in`, { workerId, name });

export const checkOut = (workerId) =>
  axios.post(`${API_URL}/check-out`, { workerId });

export const getWorkers = () =>
  axios.get(`${API_URL}/workers`);
