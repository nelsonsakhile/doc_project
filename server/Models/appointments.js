import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  contact: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date : {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;