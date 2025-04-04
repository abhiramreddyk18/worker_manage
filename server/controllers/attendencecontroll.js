import express from 'express'
import attendencemodel from '../models/attendence.js'
import jwt from 'jsonwebtoken'
import employeemodel from '../models/employee.js'

export const intime=async(req,res)=>{
    const{empId}=req.body;
    try {
        const user=await employeemodel.findOne({empId});
        if(!user)
        {
            return res.status(400).send({message:"user not exist"});
        }
        
        const attendence={
            empId,name:user.name,
            InTime:Date.now()
        }
        const Data=new attendencemodel(attendence);
        Data.save()

        return res.status(200).send({message:"Entry information added"})
    } catch (error) {
        console.log("error occur in intime");
    }
}
export const outTime=async(req,res)=>{
    const{empId}=req.body;
    try {
        const user=await employeemodel.findOne({empId});
        if(!user)
        {
            return res.status(402).send({message:"user not found"})
        }
        const data=await attendencemodel.findOne({empId: empId, active: true});
        if(!data)
        {
            return res.status(400).send({message:"employee was not in the Industy"})
        }
        console.log("iam")
        data.OutTime = Date.now();
        
        const hours=(data.OutTime - data.InTime) / (1000 * 60 * 60);  
        console.log("qwer")
        data.hours = hours;

        data.payment=hours*user.hourlyRate;
        data.active=false;
        await data.save();

        user.totalWorkHours+=hours;
        user.salary+=data.payment;
        
        await user.save();


        return res.status(200).send({message:"employee go to outside"})

    } catch (error) {
        console.log("error occur in the attendence")
    }
}

export const attend=async(req,res)=>{
    const{empId}=req.body;
    try {
        const user =await employeemodel.findOne({empId})
        if(!user)
        {
            return res.status(400).send({message:"user not found"});
        }
        const attendencedata=await attendencemodel.find({empId}).sort({ createdAt: -1 });
        if(attendencedata.length===0)
        {
            return res.status(400).send({message:"he is new employee"})
        }
        return res.status(200).send(attendencedata);
        
    } catch (error) {
        console.log("error in the get attendence")
        return res.status(400).send({message:"error in the get attendence"})
    }
}

export const scanner=async(req,res)=>{
    const{empId}=req.body;
    try {
        const user=await employeemodel.findOne({empId});
        if(!user)
        {
            return res.status(402).send({message:"user not found"})
        }
        const data=await attendencemodel.findOne({empId: empId, active: true});
        if(!data)
        {

            const attendence={
                empId,name:user.name,
                InTime:Date.now()
            }
            const Data=new attendencemodel(attendence);
            Data.save()

            return res.status(200).send({message:"Entry information added"})
        }
        console.log("iam")
        data.OutTime = Date.now();
        
        const hours=(data.OutTime - data.InTime) / (1000 * 60 * 60);  
        console.log("qwer")
        data.hours = hours;

        data.payment=hours*user.hourlyRate;
        data.active=false;
        await data.save();

        user.totalWorkHours+=hours;
        user.salary+=data.payment;
        
        await user.save();


        return res.status(200).send({message:"employee go to outside"})

    } catch (error) {
        console.log("error occur in the attendence")
    }
}

export const getattend=async(req,res)=>{
    try {
        const user =await attendencemodel.find().sort({ createdAt: -1 });
        if(user.length===0)
        {
            return res.status(400).send({message:"no data found"});
        }
        
        return res.status(200).send(user);
        
    } catch (error) {
        console.log("error in the get attendence")
        return res.status(400).send({message:"error in the get attendence"})
    }
}


export const attendfilter=async(req,res)=>{
    try {
        const { empId, } = req.query;
        const Datastem=await attendencemodel.find();
        if(!empId)
        {
            return res.status(200).send(Datastem)
        }
        const Data=await attendencemodel.find({empId});
        
        if(Data.length===0)
        {
            return res.status(400).send({message:"no data found"})
        }
        return res.status(200).send(Data)

        
      } catch (error) {
        console.error("Error fetching attendance:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
}

