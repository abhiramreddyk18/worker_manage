import express from 'express'
import { attend, attendfilter, getattend, intime, outTime, scanner } from '../controllers/attendencecontroll.js';

const attendencerouter=express.Router();

attendencerouter.post('/incoming',intime);
attendencerouter.post('/outgoing',outTime);
attendencerouter.get('/attend',attend);
attendencerouter.post('/scanning',scanner)
attendencerouter.get('/getattend',getattend)
attendencerouter.get('/attendfilter',attendfilter)
export default attendencerouter;

