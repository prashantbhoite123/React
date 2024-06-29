import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';

function Videos() {
  const master = ['https://youtu.be/eNUpTV9BGac'];

  const [video, setvideos] = useState(master[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          src={video}
          controls
          controlsList="nodeownload"
          style={{
            width: '100%',
          }}
        ></video>

        <VStack alignItems={'flex-start'} p={'8'} w={['full']}>
          <Heading>Sample video 1</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elitlicabo culpa
            distinctio, deserunt
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        <Button variant={'ghost'}>lecture 1</Button>
      </VStack>
    </Stack>
  );
}

export default Videos;
