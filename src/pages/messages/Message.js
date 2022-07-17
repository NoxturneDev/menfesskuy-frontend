import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
    Button,
    Box,
    Flex
} from "@chakra-ui/react"
import MsgBox from "../../components/MsgBox";
import Nav from "../../components/Navbar";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../assets/Logo.png"
import { getMessage } from '../../data/data';

function Message() {
    const [name, setName] = useState('')
    const { user } = useParams()
    const [msg, setMsg] = useState([])

    const messages = async () => {
        try {
            const data = await getMessage(user)
            setMsg(data)
        } catch (err) {
            throw err
        }
    }


    useEffect(() => {
        messages()
    }, [])

    return (
        <>
            <Nav />
            <Flex
                minHeight="100vh"
                h="max-content"
                justifyContent="center"
                alignItems="start"
                p={[4, 8]}
                bgGradient='linear(to-l, #7928CA, #FF0080)'
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
                <Flex

                    flexDir={['column', 'row']}
                    flexWrap="wrap">
                    {
                        msg.map(e => {
                            return <MsgBox sender={e.from} msg={e.message} key={name} />
                        })
                    }
                </Flex>
            </Flex>
        </>
    )
}

export default Message