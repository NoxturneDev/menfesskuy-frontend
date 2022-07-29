import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {
    Stack,
    Spinner
} from "@chakra-ui/react";
import axios from "axios";
import FormInput from "../../components/Forms/FormInput"
import customToast from '../../components/Toast';
import { PrimaryBtn } from '../../components/ui/Buttons';

function SendMessage() {
    const { user } = useParams()
    const [msg, setMsg] = useState('')
    const [from, setFrom] = useState('')
    const [loading, setLoading] = useState(false)
    const [errMsg, setErr] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/send/message/${user}`, {
                from: from,
                message: msg
            })

            customToast('success', 'Berhasil', 'Pesan berhasil dikirim')
            setLoading(false)
        } catch (err) {
            setErr(err.response.data.msg)
            setLoading(false)
        }
    }

    useEffect(() => {
        // IF THERE'S ERROR, INVOKE THE TOAST
        if (errMsg !== '') {
            customToast('error', errMsg)
        }
      }, [errMsg])

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
                        {loading ? <Spinner
                            thickness='7px'
                            speed='0.75s'
                            emptyColor='gray.800'
                            color='main.500'
                            size='xl'
                        /> : <PrimaryBtn txt="Send!" />}
                    </form>
                </Stack>
            </Stack>
        </>
    )
}

export default SendMessage