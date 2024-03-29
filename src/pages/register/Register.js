import React from 'react'
import {
    Flex,
    Stack,
    Box,
    Center,
    Heading
} from '@chakra-ui/react'
import Logo from "../../assets/Logo.png"
import RegisterForm from "./RegisterForm"

function Login() {
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
                                <Heading fontSize={["md", "xl"]} color="gray.500" fontWeight="medium" borderBottomWidth="4px" borderBottomColor="main.500">
                                    YUK GAN REGIS DULU
                                </Heading>
                                <RegisterForm />
                            </Stack>
                        </Stack>
                    </Box>
                </Center>
            </Flex>
        </>
    )
}

export default Login