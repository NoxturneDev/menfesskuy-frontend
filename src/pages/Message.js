import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
    Button,
    Stack,
    Flex
} from "@chakra-ui/react"
import MsgBox from "../components/MsgBox";
import Nav from "../components/Navbar";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Message() {
    const [name, setName] = useState('')
    const { user } = useParams()
    const [token, setToken] = useState('')
    const [msg, setMsg] = useState([])

    const getUserCredential = async () => {
        const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
        const userToken = user.data.accessToken
        const decoded = jwtDecode(userToken)

        return {decoded, userToken}
    }

    const getMessage = async () => {
        const messages = await axios.get(`http://localhost:3001/api/get/message/${user}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setMsg(messages.data.msg)
    }

    useEffect(() => {
        const getData = async () => {
            try {
                const getToken = await getUserCredential()
                
                setToken(getToken.userToken)
                await getMessage()
            } catch {
                return null
            }
        }
        getData()
    }, [token])

    return (
        <>
            <Nav />
            <Flex
                minWidth="100vw"
                justifyContent="center"
                alignItems="center"
            >
                {
                    msg.map(e => {
                        return <MsgBox sender="Galih" to={name} msg={e.message} key={name} />
                    })
                }
            </Flex>
        </>
    )
}

export default Message