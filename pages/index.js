import Link from 'next/link'
import { Flex, Box, Text, Button, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react'

import Property from '../components/Property'
import { BASE_URL, fetchApi } from '../utils/fetchApi'

export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex
    flexWrap='wrap'
    justifyContent='center'
    alignItems='center'
    px='5'
    my='10'
    mx='auto'
    w={{ sm: '100%', md: '90%' }}
    direction={{ sm: 'column', md: 'row' }}
  >
    <Image
      src={imageUrl}
      w={{ sm: '100%', md: '50%' }}
      objectFit='cover'
      height={300}
      alt={title1}
    />
    <Box
      w={{ sm: '100%', md: '50%' }}
      p={{ md: '10' }}
      pt={{ sm: '10' }}
      textAlign={{ sm: 'center', md: 'left' }}
    >
      <Text
        fontSize='sm'
        fontWeight='medium'
        color={useColorModeValue('gray.500', 'gray.400')}
      >
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>
      <Text
        fontSize='lg'
        paddingTop='3'
        paddingBottom='3'
        color={useColorModeValue('gray.700', 'gray.500')}
      >
        {desc1}<br />{desc2}
      </Text>
      <Button fontSize='xl' bg="blue.300" color="white">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <SimpleGrid
      columns={{ sm: '1', md: '2', lg: '3' }}
      spacing='5'
      px='5'
    >
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </SimpleGrid>

    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <SimpleGrid
      columns={{ sm: '1', md: '2', lg: '3' }}
      spacing='5'
      px='5'
    >
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </SimpleGrid>
  </Box>
)

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  }
}

export default Home
