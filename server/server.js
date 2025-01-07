import express from "express";
import { connectDB } from "./config/db.js"
import Appointment from "./Models/appointments.js"

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//get all appointments
app.get("/appointment", async (req, res)=>{
  try{
    const appointments = await Appointment.find({})
    res.status(200).json({success: true, data: appointments })
  }catch(error){
    res.status(404).json({success: false, message: "Server Error"})
  }
})

// make an appointment

app.post('/appointment', async (req, res) =>{
  const appointment = req.body;
  if (!appointment.name){
    return res.status(400).json({success: false, message: "No name dude"})
  }
  const newAppointment = new Appointment(appointment)
  try{
   await newAppointment.save();
   res.status(200).json({success: true, data: newAppointment})
  }catch(error){
    console.log(error)
    res.status(500).json({success: false, message: "Server error"})
  }
})

// Update appointment (seen or not seen)
app.put("/appointment/:id", async (req, res)=>{
  const {id} = req.params;
  const appointment = req.body;
  try{
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, {new:true});
    res.status(200).json({success: true, data: updatedAppointment})
  }catch(error){
    console.log(error)
    res.status(500).json({success: false, message: "Bad Request"})
  }
})
//Delete an appointment
app.delete("/appointment/:id", async (req, res) =>{
  const {id} = req.params;
  try{
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Appointment Deleted"})
  }catch(error){
    res.status(404).json({success: false, message: "Appointment not found"})
  }
})

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})