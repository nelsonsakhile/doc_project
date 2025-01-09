import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import {Grid, GridItem} from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid bg="gray.50" templateColumns = "repeat(6, 1fr)">
      <GridItem
        as="aside"
        colSpan= "1"
        bg = "green.300"
        minHeight = "100vh"
        p = "30px"
      >
      <Sidebar/>
      </GridItem>
      <GridItem
        as = "main"
        colSpan= "5"
      >
      <Navbar />
      <Outlet />
      </GridItem>
    </Grid>
  )
}
