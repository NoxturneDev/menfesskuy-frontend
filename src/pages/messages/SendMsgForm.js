import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
    Stack
} from "@chakra-ui/react";
import axios from "axios";
import FormInput from "../../components/Forms/FormInput"
import customToast from '../../components/Toast';
import { PrimaryBtn } from '../../components/ui/Buttons';
function SendMessage() {
    const { user } = useParams()
    const [msg, setMsg] = useState('')
    const [from, setFrom] = useState('')


    const sendMessage = async (e) => {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/send/message/${user}`, {
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
                       <PrimaryBtn txt="SEND!"></PrimaryBtn>
                    </form>
                </Stack>
            </Stack>
        </>
    )
}

export default SendMessage