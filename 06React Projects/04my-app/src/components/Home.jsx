import {
  Box,
  Container,
  Heading,
  Img,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/one.jpg';

import vg from '../assets/3dMenImage.png';
import tech1 from '../assets/technowlogyImage.jpg';
import tech2 from '../assets/technowlogyimage2.jpg';

const headingContent = {
  pos: 'absolute',

  Flex: 'Flex',
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
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={vg} h={['40', '400']} filter={'hue-rotate(130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nam.
            Natus aspernatur cupiditate in quisquam quod amet beatae quibusdam,
            optio totam. Officia quia praesentium assumenda dolores debitis!
            Earum, odio. Id? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Aperiam rerum repellendus, aliquid dolorum id repellat
            praesentium quis nihil enim quisquam dicta vero, porro beatae itaque
            blanditiis modi. Ratione,
          </Text>
        </Stack>
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
      <Img src={tech1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingContent}>
        Feature in programmingf
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Img src={tech2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingContent}>
        Watch the feature
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
