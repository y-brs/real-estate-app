import { Box, chakra, Container, Stack, Text, VisuallyHidden } from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg='blackAlpha.100'
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.400',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Footer = () => (
  <Box
    textAlign='center'
    py='5'
    color='gray.600'
  >
    <Container
      w='100%'
      as={Stack}
      direction={{ base: 'column', md: 'row' }}
      spacing={5}
      justify={{ base: 'center', md: 'space-between' }}
      align='center'
      maxWidth="100%"
    >
      <Text>© 2021 Realtor, Inc. All rights reserved</Text>
      <Stack direction={'row'} spacing={6}>
        <SocialButton label={'Twitter'} href={'#'}>
          <FaTwitter />
        </SocialButton>
        <SocialButton label={'YouTube'} href={'#'}>
          <FaYoutube />
        </SocialButton>
        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
      </Stack>
    </Container>
  </Box>
)

export default Footer
