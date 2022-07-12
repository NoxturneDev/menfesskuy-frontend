
import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import {
    Button,
    Stack,
    Flex
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
            <h3>{link}</h3>
            <Flex
                minWidth="100vw"
                justifyContent="center"
                alignItems="center"
            >
                <Card link={`/message/${link}`} uniqueLink={link} />
                <Card />
            </Flex>
        </>
    )
}

export default Dashboard