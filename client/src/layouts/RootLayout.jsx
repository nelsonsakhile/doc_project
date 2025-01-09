import { Outlet } from "react-router-dom"
import {Box} from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Box >
      <Outlet />
    </Box>
  )
}
