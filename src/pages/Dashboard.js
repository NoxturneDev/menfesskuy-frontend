
import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
    Button,
    Stack,
    Flex,
    Input,
    Box,
    Heading
} from "@chakra-ui/react"
import Card from "../components/Card";
import Nav from "../components/Navbar";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')

    const navigate = useNavigate()

    const userCredential = {
        id: null,
        name: null,
        user_link: null
    }
    const getUserCredential = async () => {
        try {
            const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
            const token = user.data.accessToken
            const decoded = jwtDecode(token)
            const userLink = decoded.user_link


            userCredential.id = decoded.userId
            userCredential.name = decoded.username
            userCredential.user_link = userLink


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
    return (
        <>
            <Nav />
            <Flex
                minWidth="100vw"
                justifyContent="center"
                alignItems="center"
                flexDir="column"
            >
                <Stack
                    space={2}
                    m={2}
                    p={4}
                    w="max-content"
                >
                    <Box
                        px={5}
                        py={3}
                        maxWidth="max-content"
                        bgColor="green.400"
                        borderRadius="10px"
                    >
                        <Heading
                            color="white"
                        >
                            {link}
                        </Heading>

                    </Box>
                    <Button
                        bgColor="green.400"
                        color="white"
                    >
                        SHARE LINK
                    </Button>
                </Stack>
                <Card link={`/message/${link}`} uniqueLink={link} header="open message box" txt="open" />
            </Flex>
        </>
    )
}

export default Dashboard