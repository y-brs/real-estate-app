import Head from 'next/head'
import { Box, useColorModeValue } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>

      <Box
        as="header"
        borderBottom='1px'
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      >
        <Box maxWidth="1280px" m="auto">
          <Header />
        </Box>
      </Box>

      <Box as="main">
        <Box maxWidth="1280px" m="auto">
          {children}
        </Box>
      </Box>

      <Box
        as="footer"
        borderTop='1px'
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
        mt='10'
      >
        <Box maxWidth="1280px" m="auto">
          <Footer />
        </Box>
      </Box>
    </>
  )
}
