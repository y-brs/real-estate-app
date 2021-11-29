import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
      </Head>

      <Box
        as="header"
        borderBottom='1px'
        borderColor='gray.100'
      >
        <Box maxWidth="1280px" m="auto">
          <Header/>
        </Box>
      </Box>

      <main>
        <Box maxWidth="1280px" m="auto">
          {children}
        </Box>
      </main>

      <Box
        as="footer"
        borderTop='1px'
        borderColor='gray.100'
        mt='10'
      >
        <Box maxWidth="1280px" m="auto">
          <Footer/>
        </Box>
      </Box>
    </>
  );
}
