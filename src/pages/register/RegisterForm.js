import { useState, useEffect } from "react";
import {
  Button,
  Stack,
  InputRightElement,
  ButtonGroup,
  Spinner
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
import FormInput from "../../components/Forms/FormInput"
import customToast from "../../components/Toast";
import { PrimaryBtn, SecondaryBtn, PrimaryFillBtn, SecondaryFillBtn } from "../../components/ui/Buttons"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirPass, setConfir] = useState('')
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword);

  async function registerUser(e) {
    try {
      e.preventDefault()
      setLoading(true)
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users`, {
        username: username,
        password: password,
        confirmationPass: confirPass
      }, { withCredentials: true })
      customToast('success', 'Akun berhasil dibuat, kembali ke halaman login...')
      setLoading(false)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (err) {
      setLoading(false)
      if (err.response) {
        setMsg(err.response.data.msg)
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
            <Stack>
              <ButtonGroup display="flex" justifyContent="center" alignItems="center">
                {loading ? <Spinner
                  thickness='7px'
                  speed='0.75s'
                  emptyColor='gray.800'
                  color='main.500'
                  size='xl'
                /> : <PrimaryBtn txt="Register" />}
                <Link to="/">
                  <PrimaryFillBtn txt="Cancel" />
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
