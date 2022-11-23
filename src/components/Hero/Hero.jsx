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
  <div id="hero">
    <Stack minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={{base:"4",md:"5"}} w={'full'} maxW={'lg'} textAlign={{base:"center", md:"start"}}>
          <Box margin={{base:"auto",md:"0"}} display="flex" color={"#ff6225"} fontWeight="bold" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          Hi{" "}
          <Image
          width="50px"
            style={{ marginLeft: "6px" }}
            src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
            alt="hand waveing"
          />
          ,
          
        </Box>
        <Text fontWeight="bold" color={"#ff6225"} fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>I'm <Text color={"#383874"} as={"span"}>Aman Mate</Text> </Text>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              color={"#383874"}
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
          {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#ff6225'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text> */}
          
        </Stack>
      </Flex>
      <Flex flex={1}>
          <Box w="100%" display={"flex"} alignItems="center">

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
    </div>
  );
}