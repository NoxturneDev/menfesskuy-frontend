import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  InputRightElement,
  ButtonGroup,
  createStandaloneToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import { AlertFailure } from "../components/Alert";
import FormInput from "../components/Forms/FormInput"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirPass, setConfir] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('')
  const navigate = useNavigate()
  const { toast } = createStandaloneToast()

  const handleShowClick = () => setShowPassword(!showPassword);

  async function registerUser(e) {
    try {
      e.preventDefault()
      await axios.post('http://localhost:3001/api/users', {
        username: username,
        password: password,
        confirmationPass: confirPass
      }, { withCredentials: true })
      customToast('Berhasil', 'Akun berhasil dibuat, kembali ke halaman login...', 'success')
      setTimeout(() => {
        navigate('/')
      }, 4000)
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg)
      }
    }
  }

  const customToast = (title, msg, status,) => {
    toast({
      title: title,
      description: msg,
      status: status,
      duration: 4000,
      isClosable: true,
    })
  }

  useEffect(() => {
    // IF THERE'S ERROR, INVOKE THE TOAST
    if (msg !== '') {
      customToast('Error', msg, 'error')
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
          <form onSubmit={registerUser}>
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
            </FormInput>
            <FormInput
              placeholder="Confirm your password"
              type={showPassword}
              state={setConfir}
            >
              <InputRightElement width="4.5rem">
                <Button bg="dark.500" color="gray.200" h="1.75rem" size="sm" onClick={handleShowClick} _hover={{ bg: "dark.500" }}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </FormInput>
            <Stack>
              <ButtonGroup>
                <Button
                  borderRadius="5px"
                  type="submit"
                  variant="solid"
                  bgColor="dark.500"
                  width="full"
                  color="white"
                  _hover={{ bgColor: "light.500" }}

                >
                  Register
                </Button>
                <Link to="/">
                  <Button
                    borderRadius="5px"
                    type="submit"
                    variant="solid"
                    bgColor="light.500"
                    width="full"
                    color="white"
                    _hover={{ bgColor: "light.500" }}

                  >
                    Cancel
                  </Button>
                </Link>
              </ButtonGroup>
            </Stack>
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;