
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
import { useNavigate } from 'react-router-dom';
import { AlertFailure, AlertSuccess } from "../components/Alert"
import { ButtonToast } from "../components/Toast"

function Dashboard() {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const navigate = useNavigate()
    const [alert, setAlert] = useState('')
    const [alertMsg, setAlertMsg] = useState('')

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
            }).catch(() => {
                console.log('failed')
            })
        } else {
            console.log('not supported')
        }
    }

    function copyToClipboard() {
        navigator.clipboard.writeText(url)
    }
    return (
        <>
            <AlertFailure open={alert} title="GAGAL" msg={alertMsg}></AlertFailure>
            <AlertSuccess open={alert} title="BERHASIL" msg={alertMsg}></AlertSuccess>
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
                            <ButtonToast header="Copied" msg="Link berhasil dicopy ke clipboard" status="success" btnTxt="Share Link Gan!" />
                        </ButtonGroup>
                        <ButtonGroup onClick={copyToClipboard}
                            w="max-content"
                        >
                            <ButtonToast header="Copied" msg="Link berhasil dicopy ke clipboard" status="success" btnTxt="Copy To Clipboard" />
                        </ButtonGroup>
                    </Flex>
                </Stack>
                <Card link={`/message/${link}`} uniqueLink={link} header="open message box" txt="open" />
            </Flex>
        </>
    )
}

export default Dashboard