import { Outlet } from "react-router-dom"
import {Grid, GridItem} from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid bg="gray.50" templateColumns = "repeat(6, 1fr)">
      <GridItem
        as = "main"
        colSpan= "6"
      >
      <Outlet />
      </GridItem>
    </Grid>
  )
}
