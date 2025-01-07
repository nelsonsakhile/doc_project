import express from "express";
import getAppointments from "../Controllers/getApp.cntrl.js"
import createAppointment from "../Controllers/createApp.cntrl.js"
import updateAppointment from "../Controllers/updateApp.cntrl.js"
import deleteAppointment from "../Controllers/deleteApp.cntrl.js"

const router = express.Router();

//get all appointments

router.get("/", getAppointments)

// make an appointment

router.post('/', createAppointment)

// Update appointment (seen or not seen)
router.put("/:id", updateAppointment)

//Delete an appointment

router.delete("/:id", deleteAppointment)

export default router;