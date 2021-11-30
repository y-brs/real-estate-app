import { useState } from 'react'
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react'
import Slider from 'react-slick'

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
}

export default function ImageSrollbar({ data }) {
  const [slider, setSlider] = useState(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}
    >
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Box w='full' overflow='hidden'>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {data.map((item, index) => (
            <Box key={index} mx='1'>
              <Image
                w={750}
                h={500}
                src={item.url}
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}
