import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
    Flex,
    Stack,
    Box,
    Center,
    Text,
    Heading
} from '@chakra-ui/react'
import Logo from "../../assets/Logo.png"
import SendMsgForm from "./SendMsgForm"
import SuccessSendModal from '../../components/SuccessSendModal'
function Login() {
    const [success, setSuccess] = useState(false)
    console.log(success)

    return (
        <>

            {/* CONTAINER */}
            <Flex
                minWidth="100vw"
                bgColor="gray.200"
                height="100vh"
                alignItems="center"
                justifyContent="center"
                flexDir="column"
                bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
            <SuccessSendModal hidden={success ? false : true} />

                <Center py={6} mx={[3, 4]}>
                    {/* FORMS CARD */}
                    <Box
                        maxWidth="500px"
                        w={'full'}
                        bg="gray.800"
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}
                        py={{ sm: 1, md: 4 }}
                        hidden={success ? true : false}
                    >

                        <Stack
                            textAlign={'center'}
                            py={[8, 6]}
                            px={[2, 4]}
                            align={'center'}>

                            {/* IMG CONTAINER */}
                            <Box
                                maxW="80%"
                                padding={2}
                                mb={[8, 4]}
                            >
                                <img src={Logo} alt="logo" w="90%" />
                            </Box>
                            <Stack
                                direction={'column'}
                                align={'center'}
                                justify={'center'}
                                width="90%"
                            >
                                {/* FORMS COMPONENT */}
                                <Heading fontSize={["lg", "2xl"]} color="gray.500">
                                    Isi pesan rahasiamu
                                </Heading>
                                <SendMsgForm success={setSuccess}/>
                            </Stack>

                            {/* REDIRECT TO REGISTER PAGE */}
                            <Link to="/register">
                                <Text color="gray.400"
                                    fontSize={["md", "lg"]}
                                >
                                    Pengen punya akun juga?
                                </Text>
                            </Link>
                        </Stack>
                    </Box>
                </Center>
            </Flex>
        </>
    )
}

export default Login