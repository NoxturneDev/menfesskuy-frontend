import React, { useState } from 'react'
import {
    Flex,
    Heading
} from "@chakra-ui/react"
import MsgBox from "../../components/MsgBox";
import Nav from "../../components/Navbar";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import logo from "../../assets/Logo.png"
import { getMessage } from '../../api/data';
import Loader from '../../components/ui/Loader';
function Message() {
    const { user } = useParams()
    const [msg, setMsg] = useState([])
    const [loading, setLoading] = useState(false)

    const messages = async () => {
        try {
            setLoading(true)
            const data = await getMessage(user)
            setMsg(data)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }

    const showMsg = () => {
        if (msg.length > 0) {
            return msg.map(e => {
                return <MsgBox sender={e.from} msg={e.message} key={e.id} />
            })
        }
        return <MsgBox newUser="true" />
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
                alignItems="center"
                p={[4, 8]}
                bgGradient='linear(to-b, main.900, main.500, accent)'
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
                    flexWrap="wrap"
                    justifyContent={['', 'center']}
                    alignItems={['', 'center']}>
                    {loading ? <Loader /> : showMsg()}
                </Flex>
            </Flex>
        </>
    )
}

export default Message