import { Box, Container, Heading, Img } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/one.jpg';
import img2 from '../assets/two2.jpg';
import img3 from '../assets/three3.jpg';
import { transform } from 'framer-motion';

const headingContent = {
  pos: 'absolute',
  left: '50%',
  right: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  padding: '4',
};
function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading textTransform={'uppercase'} py="2">
          Services
        </Heading>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} w={'full'} h={'100vh'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingContent}>
        Watch the feature
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingContent}>
        Feature in programmingf
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingContent}>
        Watch the feature
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
