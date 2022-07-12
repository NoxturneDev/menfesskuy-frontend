import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import AlertFailure from "../components/Alert";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirPass, setConfir] = useState('')
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleShowClick = () => setShowPassword(!showPassword);

  async function registerUser(e) {
    try {
      e.preventDefault()
      await axios.post('http://localhost:3001/api/users', {
        username: username,
        password: password,
        confirmationPass: confirPass
      }, { withCredentials: true })

      navigate('/')
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg)
        console.log(msg)
        setOpen(true)
      }
    }
  }

  return (
    <>
      <AlertFailure open={open} title="FAILURE!" msg={msg} />
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.100"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={registerUser}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>

                    <Input type="text"
                      placeholder="username" onChange={(e) => {
                        setUsername(e.target.value)
                      }} required/>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value)
                      }
                      }
                      required
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Stack>
                    <Text
                      color="red.500"
                    >{msg}</Text>
                  </Stack>
                </FormControl>
                <FormControl>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Confir Password"
                      onChange={(e) => {
                        setConfir(e.target.value)
                      }
                      }
                      required
                    />
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Register
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
