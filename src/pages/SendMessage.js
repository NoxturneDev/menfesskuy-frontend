import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
function SendMessage() {
    const { user } = useParams()
    const [msg, setMsg] = useState('')
    const [from, setFrom] = useState('')
    const [toUser, setToUser] = useState('')


    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            const send = await axios.post(`http://localhost:3001/api/send/message/${user}`, {
                from: from,
                message: msg
            })

            console.log(send.data.msg)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
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
                    <Heading color="teal.400">Send ur Message to {user}</Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={sendMessage}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="md"
                            >
                                <FormControl>
                                    <InputGroup>
                                        <Input type="text"
                                            placeholder="from" onChange={(e) => {
                                                setFrom(e.target.value)
                                            }} />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <InputGroup>
                                        <Input type="text"
                                            placeholder="msg" onChange={(e) => {
                                                setMsg(e.target.value)
                                            }} />
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant="solid"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Send Messages!
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}

export default SendMessage