import Link from 'next/link';
import { Flex, Box, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton, Stack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons'
import { FaHome, FaMoneyBill } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaKey } from 'react-icons/fa';

const Navbar = () => (
  <Flex
    p='2'
    alignItems='center'
  >
    <Box fontSize='3xl' color='blue.500' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Realtor App</Link>
    </Box>

    <Spacer />

    <Box
      ml='10'
      display={{ base: 'none', md: 'block' }}
    >
      <Stack as="nav" direction='row' spacing='24px' fontSize='md' color='blue.700' fontWeight='bold'>
        <Link href='/' >
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

    <Box display={{ base: 'block', md: 'none' }}>
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
