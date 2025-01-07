import Appointment from "../Models/appointments.js"

const updateAppointment = async (req, res)=>{
  const {id} = req.params;
  const appointment = req.body;
  try{
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, appointment, {new:true});
    res.status(200).json({success: true, data: updatedAppointment})
  }catch(error){
    console.log(error)
    res.status(500).json({success: false, message: "Bad Request"})
  }
};

export default updateAppointment;