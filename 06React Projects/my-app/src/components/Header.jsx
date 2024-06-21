import React from 'react';

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
  Stack,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
function Header() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        top={'4'}
        left={'4'}
        bgColor={'purple'}
        color={'white'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <Stack>
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/'}>Home</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/videos?category=free'}>Free Videoes</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'purple'}
                >
                  <Link to={'/upload'}>Uplode Video</Link>
                </Button>
              </VStack>

              <HStack
                pos={'absolute'}
                bottom={'4'}
                left={'15'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme={'purple'}>
                  <Link to={'/login'}>Log in</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'outline'}
                  colorScheme={'purple'}
                >
                  <Link to={'signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
