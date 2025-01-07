import Appointment from "../Models/appointments.js"

const deleteAppointment = async (req, res) =>{
  const {id} = req.params;
  try{
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Appointment Deleted"})
  }catch(error){
    res.status(404).json({success: false, message: "Appointment not found"})
  }
};

export default deleteAppointment;