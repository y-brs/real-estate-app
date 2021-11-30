
import Link from 'next/link'
import { Box, Text, Badge, Spacer, Icon, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'

import DefaultImage from '../assets/images/house.jpg'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  <Link href={`/property/${externalID}`} passHref>
    <Box
      boxShadow='md'
      bg={useColorModeValue('', 'whiteAlpha.100')}
      cursor='pointer'
    >
      <Image
        src={coverPhoto ? coverPhoto.url : DefaultImage}
        alt={title}
        width='100%'
        height={250}
        objectFit='cover'
      />
      <Box p='5' paddingTop='3'>
        <Box display='flex' alignItems='center'>
          {isVerified &&
            <Badge borderRadius='full' fontSize='lg' p='1' marginRight='3' colorScheme='teal' color='green.400'>
              <GoVerified />
            </Badge>
          }
          <Text fontWeight='bold' fontSize='lg'>${price}{rentFrequency && ` / ${rentFrequency}`}</Text>
          <Spacer />
          <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        </Box>

        <Box
          my='1'
          fontWeight='semibold'
          as='h2'
          color={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
          lineHeight='tight'
          isTruncated
        >
          {title}
        </Box>

        <Flex
          alignItems='center'
          // color='gray.600'
          fontSize='sm'
          letterSpacing='wide'
          textTransform='uppercase'
          color={useColorModeValue('blue.500', 'blue.300')}
        >
          <Text
            display='flex'
            alignItems='center'
            mr='8'
          >
            {rooms} <Icon as={FaBed} ml='2' />
          </Text>
          <Text
            display='flex'
            alignItems='center'
            mr='8'
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
      </Box>
    </Box>
  </Link>
)

export default Property
