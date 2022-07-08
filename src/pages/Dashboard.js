import Card from "../components/Cards";
import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import axios from "axios";
import { Button } from "@chakra-ui/react"
function Dashboard() {
    const [name, setName] = useState('')

    const getUserCredential = async () => {
        const user = await axios.get('http://localhost:3001/api/token', {withCredentials: true})
        const token = user.data.accessToken
        const decoded = jwtDecode(token)

        setName(decoded.username)
    }

    return (
        <>
        <Button
        onClick={() => {
            getUserCredential()
        }}
        >

            TES!
        </Button>
            <Card name={name}/>
        </>
    )
}

export default Dashboard