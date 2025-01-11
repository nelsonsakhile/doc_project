import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, HStack, Text, Button, Spacer} from "@chakra-ui/react"


export default function Dashboard() {
 const data =  [
    {
       "id":1,
       "name":"Jane Doe",
       "email":"janedoe3@gmail.com",
       "cell_number":"0761140589",
       "date": "11/03/2025"
    },
    {
       "id":2,
       "name":"Jacob James",
       "email":"jamesj@yahoo.com",
       "cell_number":"079 234 2212",
       "date": "/date/yoshi.png"
    },
    {
       "id":3,
       "name":"Update the contact form",
       "email":"The contact form is not working properly. We need to fix the form validation and make sure the form submissions are being sent to the correct email address.",
       "cell_number":"Peach",
       "date": "/date/peac.png"
    },
    {
       "id":4,
       "name":"Improve the site's performance",
       "email":"The site is currently running slow. We need to optimize images and minify CSS and JavaScript to improve the site's loading speed.",
       "cell_number":"Luigi",
       "date": "/date/luigi.png"
    },

 ]
 return( 
      <SimpleGrid spacing={10} minW="300px">
      { data.map(item =>(
      <Card key={item.id}>
      <CardHeader>{item.name}</CardHeader>
      <CardBody>{item.email}</CardBody>
      <CardBody>{item.cell_number}</CardBody>
      <CardBody>{item.date}</CardBody>
      <CardFooter>
      <HStack>
      <Button colorScheme="blue">
        <Text>View</Text>
      </Button>
      <Spacer/>
      <Button colorScheme="red">
        <Text>Delete</Text>
      </Button>
      </HStack>
      
      </CardFooter>
      </Card> ))}
      </SimpleGrid>
  )
}

