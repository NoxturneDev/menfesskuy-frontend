import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  InputRightElement,
  Spinner
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import FormInput from "../../components/Forms/FormInput"
import customToast from "../../components/Toast";
import { PrimaryBtn } from '../../components/ui/Buttons'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword);

  async function loginFunc(e) {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        username: username,
        password: password,
      }, { withCredentials: true })

      // console.log(process.env.REACT_APP_BACKEND_URL)
      // localStorage.setItem('LoggedIn', true)
      customToast('success', 'Berhasil Login...')
      setTimeout(() => {
        navigate('/dashboard')

      }, 3000)
    } catch (err) {
      if (err.response) {
        setMsg(err.response.data.msg)
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    // IF THERE'S ERROR, INVOKE THE TOAST
    if (msg !== '') {
      customToast('error', msg)
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
                <Button
                  bg="main.500"
                  color="gray.200"
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowClick}
                  _hover={{ opacity: "0.9" }}
                  fontWeight="light">
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </FormInput>
            {loading ? <Spinner
              thickness='7px'
              speed='0.75s'
              emptyColor='gray.800'
              color='main.500'
              size='xl'
            /> : <PrimaryBtn txt="login" />}
          </form>
        </Stack>
      </Stack>
    </>
  );
};

export default Login;
