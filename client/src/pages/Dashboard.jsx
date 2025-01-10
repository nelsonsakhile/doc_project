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
    {
       "id":5,
       "name":"Add social media links",
       "email":"There are no links to our social media profiles on the site. We need to add links to our Facebook, Twitter, and Instagram accounts in the header and footer.",
       "cell_number":"Mario",
       "date": "/date/mario.png"
    },
    {
       "id":6,
       "name":"Implement a search feature",
       "email":"The site does not have a search feature. We need to add a search bar in the header that allows users to search for specific pages or products on the site.",
       "cell_number":"Yoshi",
       "date": "/date/yoshi.png"
    },
    {
       "id":7,
       "name":"Fix the responsive layout",
       "email":"The site's layout is not responsive. It does not look good on mobile devices. We need to make sure the site looks good on all devices.",
       "cell_number":"Peach",
       "date": "/date/peach.png"
    },
    {
       "id":8,
       "name":"Add a newsletter signup form",
       "email":"We do not have a way for users to sign up for our newsletter. We need to add a newsletter signup form in the footer that allows users to enter their email address.",
       "cell_number":"Luigi",
       "date": "/date/luigi.png"
    },
    {
       "id":9,
       "name":"Improve the design",
       "email":"The site's design is outdated. We need to update the site's color scheme and font to make it look more modern.",
       "cell_number":"Mario",
       "date": "/date/mario.png"
    },
    {
       "id":10,
       "name":"Add more products to the online store",
       "email":"We need to add more products to the online store. We also need to add categories and filters to make it easier for users to find what they are looking for.",
       "cell_number":"Yoshi",
       "date": "/date/yoshi.png"
    }
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

