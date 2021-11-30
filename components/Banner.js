import Link from 'next/link'
import { Flex, Box, Text, Button, Image, useColorModeValue } from '@chakra-ui/react'

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
      <Text
        fontSize='3xl'
        fontWeight='bold'
      >
        {title1}<br />{title2}
      </Text>
      <Text
        fontSize='lg'
        paddingTop='3'
        paddingBottom='3'
        color={useColorModeValue('gray.700', 'gray.500')}
      >
        {desc1}<br />{desc2}
      </Text>
      <Button
        fontSize='xl'
        bg="blue.300"
        color="white"
      >
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
