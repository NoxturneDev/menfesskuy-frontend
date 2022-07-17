import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Button,
    Stack,
    InputRightElement,
    Text,
    useToast,
    createStandaloneToast
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import FormInput from "../../components/Forms/FormInput"
import customToast from '../../components/Toast';

function SendMessage() {
    const { user } = useParams()
    const [msg, setMsg] = useState('')
    const [from, setFrom] = useState('')


    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3001/api/send/message/${user}`, {
                from: from,
                message: msg
            })

            customToast('success', 'Berhasil', 'Pesan berhasil dikirim')
        } catch (err) {
            customToast('error', 'Gagal', 'Pesan gagal dikirim')
        }
    }

    return (
        <>
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
                w="full"
            >
                <Stack
                    w="100%"
                    p={[1, 4]}
                >
                    <form onSubmit={sendMessage}>
                        <FormInput
                            placeholder="From (Boleh kosong)"
                            type="text"
                            state={setFrom}
                        >
                        </FormInput>
                        <FormInput
                            placeholder="Pesanmu..."
                            type="textarea"
                            state={setMsg}
                        >
                        </FormInput>
                        <Button
                            borderRadius="5px"
                            type="submit"
                            variant="solid"
                            bgColor="dark.500"
                            width="full"
                            color="white"
                            _hover={{ bgColor: "light.500" }}

                        >
                            Send!
                        </Button>
                    </form>
                </Stack>
            </Stack>
        </>
    )
}

export default SendMessage