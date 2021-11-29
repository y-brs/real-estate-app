import Head from "next/head"
import Link from "next/link"
import {Box, Heading, Text, Container, Button} from "@chakra-ui/react"

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Real Estate App / 404. Page not found </title>
      </Head>

      <Container py='100'>
        <Heading as="h1" mt={3}>Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>

        <Box my={6}>
          <Link href="/">
            <Button colorScheme="blue">Return to home</Button>
          </Link>
        </Box>
      </Container>
    </>
  )
}

export default NotFound
