import express from "express";
import { connectDB } from "./config/db.js"
import appointmentRoutes from "./Routes/appointments.routes.js"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/appointment", appointmentRoutes)

app.listen(port, () => {
  connectDB()
  console.log(`Example app listening on port ${port}`)
})