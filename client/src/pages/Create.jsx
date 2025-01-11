import {Container, Input,VStack, Button, Heading,Box, useToast} from "@chakra-ui/react"
import {useState} from "react"
import Navbar from '../components/Navbar'

export default function Create() {
  const [newAppointment, setNewAppointment] = useState({
    name : "",
    surname: "",
    phone: "",
    email: "",
  });
  const toast = useToast()
  const handleAddAppointment = () => {
    alert({newAppointment})
    toast({ 
      title: "Success",
      description: "You've successfully set an appointment, Thank you See you soon",
      status: "success",
      isClosable: true
    } )
  }
  return(
    <>
    <Navbar/>
    <Container
    maxW={"container.sm"}
    mt={5}
    >
    <VStack
    spacing={8}
    >
      <Heading
      as="h6"
      size={"xl"}
      textAlign={"center"}
      mb={3}
      >
        CREATE NEW APPOINTMENT
      </Heading>
      <Box
      w={"full"}
      bg="blue.50"
      p={6}
      rounded={"lg"}
      shaddow={"md"}
      >
      <VStack spacing={8}>
        <Input
        colorScheme="white"
          placeholder="Enter Your Name"
          name = "name"
          value = {newAppointment.name}
          onChange = {(e)=>setNewAppointment({...newAppointment, name: e.target.value})}
        />
        <Input
          placeholder="Enter Your Surname"
          name = "surname"
          value = {newAppointment.surname}
          onChange = {(e)=>setNewAppointment({...newAppointment, surname: e.target.value})}
        />
        <Input
          placeholder="Enter Your Phone number"
          name = "phone"
          type="number"
          value = {newAppointment.phone}
          onChange = {(e)=>setNewAppointment({...newAppointment, phone: e.target.value})}
        />
        <Input
          placeholder="Enter Your email"
          name = "email"
          value = {newAppointment.email}
          onChange = {(e)=>setNewAppointment({...newAppointment, email: e.target.value})}
        />
        <Button
        w="full"
        onClick={handleAddAppointment}
        colorScheme  = "blue"
        >
        Set Appointment
        </Button>
      </VStack>
      </Box>
    </VStack>
    </Container>
    </>
    )
}
