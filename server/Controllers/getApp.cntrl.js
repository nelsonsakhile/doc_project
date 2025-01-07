import Appointment from "../Models/appointments.js"

const getAppointments = async (req, res)=>{
  try{
    const appointments = await Appointment.find({})
    res.status(200).json({success: true, data: appointments })
  }catch(error){
    res.status(404).json({success: false, message: "Server Error"})
  }
};

export default getAppointments;