import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  InputRightElement,
  Text,
  useToast,
  createStandaloneToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import FormInput from "../components/Forms/FormInput"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const { toast } = createStandaloneToast()

  const handleShowClick = () => setShowPassword(!showPassword);

  async function loginFunc(e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
      }, { withCredentials: true })
      console.log('berhasil login')
      navigate('/dashboard')
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg)
      }
    }
  }

  const customToast = (msg, status) => {
    toast({
      title: 'An error occurred.',
      description: msg,
      status: status,
      duration: 9000,
      isClosable: true,
    })
  }

  useEffect(() => {
    // IF THERE'S ERROR, INVOKE THE TOAST
    if (msg !== '') {
      customToast(msg, 'error')
    }
  }, [msg])

  return (
    <>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        w="full"
      >
        <Stack
          w="100%"
          p={[1, 4]}
        >
          <form onSubmit={loginFunc}>
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
                <Button bg="dark.500" color="gray.200" h="1.75rem" size="sm" onClick={handleShowClick} _hover={{ bg: "dark.500" }}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </FormInput>
            <Button
              borderRadius="5px"
              type="submit"
              variant="solid"
              bgColor="dark.500"
              width="full"
              color="white"
              _hover={{ bgColor: "light.500" }}

            >
              Login
            </Button>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
