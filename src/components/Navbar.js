import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from "../assets/logo-text.png"
import { PrimaryBtn } from './ui/Buttons';

export default function Nav() {
  const navigate = useNavigate()
  const logout = async () => {
    try {
      await axios.delete('http://localhost:3001/logout', { withCredentials: true })
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <Box bg="main.900" px={4} zIndex="sticky">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box w="10rem">
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
          </Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <PrimaryBtn txt="logout"  event={logout}/>
              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                  display={["flex", "none"]}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'} zIndex="sticky" bg="gray.800" color="gray.200">
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem
                    bg="gray.800"
                    onClick={logout}
                  >Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}