import Link from 'next/link'
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack, useColorModeValue } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaMoneyBill } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'
import ThemeToggleButton from './ThemeToggleButton'

const Navbar = () => (
  <Flex
    py='2'
    px='5'
    alignItems='center'
  >
    <Box
      fontSize='3xl'
      color={useColorModeValue('blue.500', 'blue.400')}
      fontWeight='bold'
    >
      <Link
        href='/'
        paddingLeft='2'
      >
        Realtor App
      </Link>
    </Box>

    <Spacer />

    <Box
      ml='10'
      display={{ base: 'none', md: 'block' }}
    >
      <Stack
        as="nav"
        direction='row'
        spacing='24px'
        fontSize='md'
        color={useColorModeValue('blue.500', 'blue.400')}
        sx={{
          'a:hover': {
            textDecoration: 'underline',
          },
        }}
        fontWeight='bold'
      >
        <Link href='/' passHref>
          Home
        </Link>
        <Link href='/search' passHref>
          Search
        </Link>
        <Link href='/search?purpose=for-sale' passHref>
          Buy Property
        </Link>
        <Link href='/search?purpose=for-rent' passHref>
          Rent Property
        </Link>
      </Stack>
    </Box>

    <ThemeToggleButton />

    <Box
      display={{ base: 'block', md: 'none' }}
      ml='3'
    >
      <Menu>
        <MenuButton as={IconButton} icon={<HamburgerIcon />} variant='outline' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FaHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<FaSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FaMoneyBill />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FaKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar
