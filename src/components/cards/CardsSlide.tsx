import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Card,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardSlide = () => {

  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Summerize your Notes.',
      text:
        "Our webapp allows you to upload your PDFs and convert them into summaries and videos. Once you upload your PDF, our webapp will automatically generate a summary of the content, making it easier for you to learn on the go. You can also convert your summary into a short video, making it easier for you to share your knowledge with others. You can then post your generated summary and video on our platform, making it easier for you to share your knowledge with others. Our webapp simplifies your study routine and unlocks your learning potential.",
      image:
        '',
    },
    {
      title: 'Learn with your peers.',
      text:
        "We believe that learning is more effective when you learn with your peers. That’s why we’ve created a platform where you can share your generated summaries and videos with others. You can also see what others are posting, making it easier for you to learn from your peers. With our webapp, you can simplify your study routine and unlock your learning potential. Sign up today and start learning smarter, not harder!",
      image:
        '',
    },
    {
      title: 'How to Use.',
      text:
      <>
      <Text fontSize='md'> Sign up for our webapp and log in</Text>
      <Text fontSize='md'> Upload your PDFs to our webapp.</Text>
      <Text fontSize='md'> Our webapp will automatically generate a summary of the content.</Text>
      <Text fontSize='md'> You can convert your summary into a short video.</Text>
      <Text fontSize='md'> You can post your generated summary and video on our platform.</Text>
      <Text fontSize='md'> You can see what others are posting and learn from your peers.</Text>
      <Text fontSize='md'> You can ask questions and get answers from other students.</Text>
      <Text fontSize='md'> You can simplify your study routine and unlock your learning potential.</Text>
      </>,
      image:
      '',
    }
]
  

  return (
    <Box
      position={'relative'}
      alignContent={'center'}
      maxHeight={'600px'}
      maxWidth={'80%'}
      marginInline={'auto'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Card
            align={'center'}
            key={index}
            maxHeight={'600px'}
            maxWidth={'80%'}
            margin={'auto'}
            position="relative"
            // borderRadius={'md'}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
            >
     {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default CardSlide;