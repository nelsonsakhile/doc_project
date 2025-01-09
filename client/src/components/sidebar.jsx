import {List, ListItem, ListIcon} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"
import {NavLink} from "react-router-dom"

export default function Sidebar() {
  return (
    <List spacing={4} fontSize="1.2em" color="white" fontWeight="bold">
      <ListItem>
        <NavLink to="/">
        <ListIcon as = {EditIcon} />  
          Dashboards
        </NavLink>
      </ListItem>
       <ListItem>
        <NavLink to="/create">
          create
        </NavLink>
      </ListItem>
       <ListItem>
        <NavLink to="/profile">
          profile
        </NavLink>
      </ListItem>
    </List>
  )
}
