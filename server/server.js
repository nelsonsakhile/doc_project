import express from "express";
import { connectDB } from "./config/db.js"
import appointmentRoutes from "./Routes/appointments.routes.js"
import cors from "cors"
import path from "path"

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
const __dirname = path.resolve()

app.use("/appointment", appointmentRoutes)
if(process.env.MODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, '/client/dist')))
  app.get("*", (req, res)=>{
    res.sendFile(__dirname, "client", "dist", "index.html")
  })
}

app.listen(port, () => {
  connectDB()
  console.log(`Example app, listening on port ${port}`)
})