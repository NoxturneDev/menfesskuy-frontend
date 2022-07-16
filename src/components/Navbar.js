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
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  Heading
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      <Box bg="gray.800" px={4} zIndex="sticky">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/dashboard">
            <Heading as="h4" color="white" fontSize="2xl">
              Menfess Kuy
            </Heading>
          </Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button
                onClick={logout}
                bgColor="dark.500"
                color="white"
                _hover={{ color : "light.500", bgColor : "dark.900"}}
              >
                LOGOUT
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
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
                    bg="dark.500"
                  >Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}