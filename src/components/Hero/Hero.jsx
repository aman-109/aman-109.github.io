import {
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: '#ff6225',
                  zIndex: -1,
                }}>
                  Full Stack
              </Text>
              <br />{' '}
              <Text color={'#ff6225'} as={'span'}>
                Web Developer
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#ff6225'}>
              The project board is an exclusive resource for contract work. It's
              perfect for freelancers, agencies, and moonlighters.
            </Text>
            
          </Stack>
        </Flex>
        <Flex flex={1}>
            <Box w="100%">

          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            w="100%"
            src={
              'https://user-images.githubusercontent.com/101388858/196033227-a44469e1-e6c8-43d7-a9d4-056c5007ca72.png'
            }
          />
            </Box>
        </Flex>
      </Stack>
    );
  }