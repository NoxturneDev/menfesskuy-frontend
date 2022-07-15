import { useState } from "react";
import {
  Flex,
  Heading,
  Button,
  Stack,
  Box,
  Avatar,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { AlertFailure } from "../components/Alert";
import FormInput from "../components/Forms/FormInput"
import Form from "../components/Forms/Form"

const Login = () => {
  // const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState('')
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  // const handleShowClick = () => setShowPassword(!showPassword);

  async function loginFunc() {
    try {
      await axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
      }, { withCredentials: true })

      navigate('/dashboard')
      console.log('berhasil login')
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg)
        console.log(msg)
        setOpen(true)
      }
    }
  }

  const getFormsData = (a, b) => {
    setUsername(a)
    setPassword(b)
    
    try {
      loginFunc()
    } catch {
      console.log("error")
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
            <Form submitFunc={getFormsData}></Form>
            {/* <form onSubmit={loginFunc}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormInput
                  placeholder="username"
                  type="text"
                  state={setUsername}
                >
                </FormInput>
                <FormInput
                  placeholder="Password"
                  type={showPassword}
                  state={setPassword}
                >
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </FormInput>
                <Stack>
                  <Text
                    color="red.500"
                  >{msg}</Text>
                </Stack>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Login
                </Button>
              </Stack>
            </form> */}
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;
