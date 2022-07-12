import React from 'react'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import {
    Flex,
    Stack,
    Button
} from '@chakra-ui/react'
function Redirect() {
    return (
        <>
            <Flex
                minWidth="100vw"
                bgColor="gray.200"
                height="100vh"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    w="60%"
                    alignItems="center"
                    justifyContent="center"
                    gap={4}
                >
                    <Link to="/login">
                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Login
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button
                            mt={10}
                            w={'full'}
                            bg={'green.400'}
                            color={'white'}
                            rounded={'xl'}
                            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                            _hover={{
                                bg: 'green.500',
                            }}
                            _focus={{
                                bg: 'green.500',
                            }}>
                            Register
                        </Button>
                    </Link>
                </Flex>
            </Flex>
        </>
    )
}

export default Redirect