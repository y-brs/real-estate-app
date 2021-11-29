import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Flex, Box, Text, Icon, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

import Property from '../components/Property'
import SearchFilters from '../components/SearchFilters'
import { BASE_URL, fetchApi } from '../utils/fetchApi'
import noresult from '../assets/images/noresult.svg'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Real Estate App / Search</title>
      </Head>

      <Box>
        <Flex
          onClick={() => setSearchFilters(!searchFilters)}
          cursor='pointer'
          bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
          // bg='gray.100'
          p='2'
          fontWeight='black'
          fontSize='lg'
          justifyContent='center'
          alignItems='center'
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft='2' w='7' as={BsFilter} />
        </Flex>

        {searchFilters && <SearchFilters />}

        <Text fontSize='2xl' p='5' fontWeight='bold'>
          Properties {router.query.purpose}
        </Text>

        <SimpleGrid
          columns={{ sm: '1', md: '2', lg: '3' }}
          spacing='5'
          px='5'
        >
          {properties.map((property) => <Property property={property} key={property.id} />)}
        </SimpleGrid>

        {properties.length === 0 && (
          <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
            <Image src={noresult} />
            <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
          </Flex>
        )}
      </Box>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent'
  const rentFrequency = query.rentFrequency || 'yearly'
  const minPrice = query.minPrice || '0'
  const maxPrice = query.maxPrice || '1000000'
  const roomsMin = query.roomsMin || '0'
  const bathsMin = query.bathsMin || '0'
  const sort = query.sort || 'price-desc'
  const areaMax = query.areaMax || '35000'
  const locationExternalIDs = query.locationExternalIDs || '5002'
  const categoryExternalID = query.categoryExternalID || '4'

  const data = await fetchApi(`${BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hitsPerPage=15`)

  return {
    props: {
      properties: data?.hits,
    },
  }
}

export default Search
