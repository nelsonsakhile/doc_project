import {Container, FormControl, FormLabel, Input, FormHelperText, Textarea, Button} from "@chakra-ui/react"
import {Form} from "react-router-dom"
export default function Create() {
  return (
  <Container p="20px" mt="100px" bg="gray.50">
    <Form>
      <FormControl>
      <FormLabel>Name</FormLabel>
      <Input type="text" name="name"/>
      </FormControl>
      
      <FormControl>
      <FormLabel>Surname</FormLabel>
      <Input type="text" name="Surname"/>
      </FormControl>
      
      <FormControl>
      <FormLabel>Email</FormLabel>
      <Input placeholder="enter email" type="text" name="name"/>
      </FormControl>
      
      <FormControl>
      <FormLabel>Date</FormLabel>
      <Textarea placeholder="Some Text" name="name"/>
      </FormControl>
      <Button
        mt="20px"
      >
      Submit
      </Button>
    </Form>
  </Container>
  )
}
