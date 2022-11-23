import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Link,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub,BsLinkedin, BsPerson } from 'react-icons/bs';
  import emailjs from "@emailjs/browser"
  import Swal from 'sweetalert2'
  
  export default function ContactForm() {

    const handleOnSubmit = (e) => {
        e.preventDefault()
       
        emailjs.sendForm('service_tjnfsjk', 'template_nbhj3a8', e.target, 'g1zTxuziHOH0lHbPQ').then(
          (result) => {
            console.log(result.text)
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully',
            })
          },
          (error) => {
            console.log(error.text)
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          },
        )
        e.target.reset()
      }
    return (
        <div id='contact'>
      <Container bg="#02054B" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="#02054B"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #0D74FF' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-8208584760
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #0D74FF' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          aman.mate.52@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #0D74FF' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Maharashtra, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 5, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                        <Link href="mailto:aman.mate.52@gmail.com" isExternal>
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdEmail size="30px" />}
                      />
                        </Link>
                        <Link href="https://www.linkedin.com/in/amanmate109/" isExternal>
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#0D74FF' }}
                          icon={<BsLinkedin size="28px" />}
                        />
                        </Link>
                        <Link href="https://github.com/aman-109" isExternal>
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="32px" />}
                      />
                        </Link>
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box width={{base:"300px",md:"400px",lg:"600px"}} bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <form style={{width:"100%"}} onSubmit={handleOnSubmit}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" name="your_name" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" name="your_email" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            name="your_message"
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                          type="submit"
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
      </div>
    );
  }