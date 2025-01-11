import {Box} from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Home from "../pages/Home"

export default function RootLayout() {
  return (
    <Box >
      <Navbar/>
      <Home/>
    </Box>
  )
}
