import { 
  Route, 
  Routes
} from 'react-router-dom'
import {Button, Box} from "@chakra-ui/react"

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Home from "./pages/Home"
import SidebarWithHeader from "./pages/Sidebar"
import Dashboard from "./pages/Dashboard"

function App() {
  return (

    <Box
     height="100vh"
    >
      <Routes>
        <Route path="/" element={<RootLayout/>} />
        <Route path="create" element={<Create/>}/>
        <Route path="dashboard" element={<SidebarWithHeader />} >
          <Route index element={< Dashboard/>}/>
          <Route path="dashboard/create" element ={<Create/>} />
          <Route path="dashboard/manage" element={<Profile />} />
        </Route>
      </Routes>

    </Box>
  )
}

export default App
