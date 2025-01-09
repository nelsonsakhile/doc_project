import { SimpleGrid, Box, Text} from "@chakra-ui/react"

export default function Dashboard() {
  return (
    <SimpleGrid p="20px" minChildWidth="250px" spacing={10}>
      <Box bg="white" h="200px" border="1px solid"> 
      <Text
        color={{base: "blue.500", sm: "green", md: "purple", lg: "brown"}}
      >Hello There</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
      <Box bg="white" h="200px" border="1px solid"> Som m</Box>
    </SimpleGrid>
  )
}
