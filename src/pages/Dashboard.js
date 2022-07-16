
import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
    Button,
    Stack,
    Flex,
    Input,
    Box,
    Heading,
    ButtonGroup
} from "@chakra-ui/react"
import Card from "../components/Card";
import Nav from "../components/Navbar";
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import customToast from "../components/Toast"
import msgIcon from "../assets/msgbox.png"
import textIcon from "../assets/msg-text.png"
import logo from "../assets/Logo.png"

function Dashboard() {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const navigate = useNavigate()

    const url = `http://localhost:3000/send/menfess/${link}`

    const getUserCredential = async () => {
        try {
            const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
            const token = user.data.accessToken
            const decoded = jwtDecode(token)
            const userLink = decoded.user_link

            setLink(userLink)
            setName(decoded.username)
        } catch (err) {
            if (err) {
                navigate("/")
            }
        }
    }

    useEffect(() => {
        getUserCredential()
    }, [])

    function shareLink() {
        if (navigator.share) {
            console.log('ANJAY BISA')
            navigator.share({
                url: url
            }).then(() => {
                console.log('sucess')
                customToast('success', 'Berhasil', 'Link udah di share gan')
            }).catch(() => {
                console.log('failed')
            })
        } else {
            console.log('not supported')
        }
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(url)
        customToast('success', 'Berhasil', 'link sudah ke copy bang')
    }
    return (
        <>
            <Nav />
            <Flex
                height="100vh"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                overflow="hidden"
                _before={{
                    content: '" "',
                    bgImage: `"${logo}"`,
                    bgPosition: "center",
                    opacity: "0.3",
                    position: "absolute",
                    h:"90%",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    
                }}
            >
                <Flex
                    w="sm"
                    h="sm"
                    bg="gray.800"
                    boxShadow="lg"
                    rounded="md"
                    p={[4, 5]}
                    justifyContent="center"
                    alignItems="center"
                    zIndex="base"

                >
                    <Stack
                        align="center"
                        textAlign="center"
                    >
                        <Box mb={[4, 9]} maxW="sm" w="full">
                            <img src={textIcon} alt="text-icon" />
                        </Box>
                        <Link to={`/message/${link}`}>
                            <img src={msgIcon} alt="msg-icon" />
                        </Link>
                    </Stack>
                </Flex>

                {/* LINK BOX CONTAINER */}
                <Stack
                    space={2}
                    m={2}
                    p={4}
                    w="max-content"
                    zIndex="base"
                >
                    <Box
                        px={5}
                        py={3}
                        maxWidth="max-content"
                        bgColor="gray.800"
                        borderRadius="10px"
                    >
                        <Heading
                            color="light.500"
                        >
                            menfess/{link}
                        </Heading>

                    </Box>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap={3}
                    >

                        <ButtonGroup onClick={shareLink}
                            w="max-content"
                        >
                            <Button
                                bg="gray.800"
                                color="gray.200"
                                _hover={{ color: "dark.500" }}
                            >Share Link gan</Button>
                        </ButtonGroup>
                        <ButtonGroup onClick={copyToClipboard}
                            w="max-content"
                        >
                            <Button
                                bg="dark.500"
                                color="gray.200"
                                _hover={{ color: "gray.800" }}
                            >Copy to clipboard</Button>
                        </ButtonGroup>
                    </Flex>

                </Stack>
            </Flex>
        </>
    )
}

export default Dashboard