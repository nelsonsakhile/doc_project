import { Spacer, Flex, Heading, Text, Button, Box, HStack } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex
      as= "nav"
      p="10px"
      bg = "gray.300"
      alignItems="center"
    >
    <Heading>Appointments</Heading>
    <Spacer/>
    <HStack spacing="20px">
    <Box bg="gray.500">NS</Box>
    <Text>nelsonsakhile@gmail.com</Text>
    <Button colorScheme="green">Add</Button>
    </HStack>
    </Flex>
  )
}
