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
      <Box maxWidth="1280px" m="auto">
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
}
