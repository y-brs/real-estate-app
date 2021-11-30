import Head from "next/head"
import { Box, Flex, Spacer, Text, Icon, Badge, useColorModeValue } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'

import millify from 'millify'

import { BASE_URL, fetchApi } from '../../utils/fetchApi'
import ImageScrollbar from '../../components/ImageScrollbar'

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  <>
    <Head>
      <title>{title} / Property {purpose} / Real Estate App</title>
    </Head>

    <Box
      px='5'
      pt='10'
    >
      <Text
        as='h1'
        fontSize='2xl'
        marginBottom='3'
        fontWeight='bold'
        color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
      >
        {title}
      </Text>

      <Box
        display='flex'
        alignItems='center'
        marginBottom='3'
      >
        {isVerified &&
          <Badge borderRadius='full' fontSize='2xl' p='1' marginRight='3' colorScheme='teal' color='green.400'>
            <GoVerified />
          </Badge>
        }
        <Text fontWeight='black' fontSize='2xl'>${price}{rentFrequency && ` / ${rentFrequency}`}</Text>
        <Spacer />
        <Avatar size='md' src={agency?.logo?.url}></Avatar>
      </Box>

      <Flex
        alignItems='center'
        fontSize='md'
        letterSpacing='wide'
        textTransform='uppercase'
        color={useColorModeValue('blue.500', 'blue.300')}
      >
        <Text
          display='flex'
          alignItems='center'
          mr='10'
        >
          {rooms} <Icon as={FaBed} ml='2' />
        </Text>
        <Text
          display='flex'
          alignItems='center'
          mr='10'
        >
          {baths} <Icon as={FaBath} ml='2' />
        </Text>
        <Text
          display='flex'
          alignItems='center'
        >
          {millify(area)} sqft <Icon as={BsGridFill} ml='2' />
        </Text>
      </Flex>

      <Box>
        {amenities.length && <Text fontSize='xl' fontWeight='black' marginTop='5'>Facilites</Text>}
          <Flex flexWrap='wrap'>
            {amenities?.map((item) => (
                item?.amenities?.map((amenity) => (
                  <Text
                    key={amenity.text}
                    fontWeight='bold'
                    color='blue.400'
                    fontSize='sm'
                    p='2'
                    bg='gray.200'
                    mr='2'
                    mb='2'
                    borderRadius='5'
                  >
                    {amenity.text}
                  </Text>
                ))
            ))}
          </Flex>
      </Box>

      {/* <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Type</Text>
          <Text fontWeight='bold'>{type}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
          <Text>Purpose</Text>
          <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
            <Text>Furnishing Status</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex> */}

      {photos && <ImageScrollbar data={photos} />}

      <Box marginTop='5'>
        <Text
          lineHeight='2'
          color={useColorModeValue('gray.800', 'gray.300')}
        >
          {description}
        </Text>
      </Box>
    </Box>
  </>
)

export default PropertyDetails

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${BASE_URL}/properties/detail?externalID=${id}`)

  return {
    props: {
      propertyDetails: data,
    },
  }
}
