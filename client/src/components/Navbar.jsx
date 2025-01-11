import { 
  Container,
  Box,
  Heading,
  Text,
  Flex,
  HStack, 
  Button,
  Spacer
  
} from "@chakra-ui/react"
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    
    <Flex alignItems="center" as= "nav" p= "10px" mb="0px" bg= "gray.50">
    <Heading as="h1">Your Logo</Heading>
    <Spacer/>
    <Button colorScheme="blue">
      <Link to="dashboard">  Login </Link>
    </Button>
    </Flex>
    
    )}