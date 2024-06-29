import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Subscribe to get update
          </Heading>
          <HStack py={'2'} borderBottom={'2px solid white'}>
            <Input
              placeholder={'Enter your email here ...'}
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'o'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0px'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={['center', 'left']}>
            VIDEO HUB
          </Heading>
          <Text>All Right received</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading textTransform={'uppercase'} size={'md'}>
            Social Media
          </Heading>
          <Button variant={'Link'} colorScheme={'whiteAlpha'}>
            <a href="https://google.com">google</a>
          </Button>
          <Button variant={'Link'} colorScheme={'whiteAlpha'}>
            <a href="https://youtube.com">youtube</a>
          </Button>
          <Button variant={'Link'} colorScheme={'whiteAlpha'}>
            <a href="https://brave.com">Brave</a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
}

export default Footer;
