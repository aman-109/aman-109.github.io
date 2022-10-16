// import React from 'react'
import { Link } from "react-scroll"
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import styles from "./Navbar.module.css"


const Links = ['Home','About','Skills','Projects', 'Contact'];

const NavLink = ({ children }:{children: ReactNode}) => (
  <Link
  to={children}
  smooth={true}
  duration={1000}
  activeClass={styles.active}
  spy={true}
  hashSpy={true}
>
  <div className={styles.nav}>{children}</div>
</Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack justifyContent={{base:"center",md:"space-between"}}  w={"100%"} p={4} spacing={8} alignItems={'center'}>
            <Box border="1px solid red" >
            <Avatar
                  size={'md'}
                  src={
                    'https://user-images.githubusercontent.com/101388858/196022065-2bd0a0b3-518c-48f1-a70b-7a8701821253.png'
                  }
                />
            </Box>
            <HStack
              as={'nav'}
              spacing={8}
             
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
