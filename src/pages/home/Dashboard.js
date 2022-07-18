
import React, { useState } from 'react'
import {
    Button,
    Stack,
    Flex,
    Box,
    Heading,
    ButtonGroup
} from "@chakra-ui/react"
import Nav from "../../components/Navbar";
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import customToast from "../../components/Toast"
import msgIcon from "../../assets/msgbox.png"
import textIcon from "../../assets/msg-text.png"
import logo from "../../assets/Logo.png"
import { userCredential } from "../../api/data";
import { PrimaryOutlineBtn, SecondaryOutlineBtn } from '../../components/ui/Buttons';
import Card from '../../components/ui/Card';
function Dashboard() {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const navigate = useNavigate()
    const url = `http://localhost:3000/send/menfess/${link}`

    const userData = async () => {
        try {
            const user = await userCredential()
            const { username, user_link } = user.decoded

            setLink(user_link)
            setName(username)
        } catch (err) {
            if (err) {
                navigate('/')
            }
        }
    }

    useEffect(() => {
        userData()
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
                bgGradient='linear(to-b, main.900, main.500, accent)'
                overflow="hidden"
                _before={{
                    content: '" "',
                    bgImage: `"${logo}"`,
                    bgPosition: "center",
                    bgRepeat: "no-repeat",
                    opacity: "0.3",
                    position: "absolute",
                    h: "90%",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    zIndex: "base"
                }}
            >
                {/* CARDS */}
                <Card width={["xs", "sm"]} height="sm" position="flex">
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
                </Card>

                {/* LINK BOX CONTAINER */}
                <Card position="stack">
                    <Box
                        px={5}
                        py={3}
                        maxWidth="max-content"
                        bgColor="dark.500"
                        borderRadius="10px"
                        mb={[2, 4]}
                    >
                        <Heading
                            color="gray.200"
                        >
                            menfess/{link}
                        </Heading>

                    </Box>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        gap={[3]}
                        flexDir={['column', 'row']}
                    >

                        <ButtonGroup onClick={shareLink}
                            w="max-content"
                        >
                            <PrimaryOutlineBtn txt="share link gan" />
                        </ButtonGroup>
                        <ButtonGroup onClick={copyToClipboard}
                            w="max-content"
                        >
                            <SecondaryOutlineBtn txt="copy to clipboard" />

                        </ButtonGroup>
                    </Flex>
                </Card>
            </Flex>
        </>
    )
}

export default Dashboard