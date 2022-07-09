
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

function Dashboard() {
    const [name, setName] = useState('')
    const getUserCredential = async () => {
        const user = await axios.get('http://localhost:3001/api/token', { withCredentials: true })
        const token = user.data.accessToken
        const decoded = jwtDecode(token)

        setName(decoded.username)
    }

    return (
        <>
            <Nav />
            <Card />
        </>
    )
}

export default Dashboard