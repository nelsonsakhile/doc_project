import Appointment from "../Models/appointments.js";

const createAppointment = async (req, res) => {
    const appointment = req.body;
    if (!appointment.name) {
        return res
            .status(400)
            .json({ success: false, message: "No name dude" });
    }
    const newAppointment = new Appointment(appointment);
    try {
        await newAppointment.save();
        res.status(200).json({ success: true, data: newAppointment });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

export default createAppointment;
