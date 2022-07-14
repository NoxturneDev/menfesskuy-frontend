import {
    useToast,
    Button
} from "@chakra-ui/react"
import React from "react"

export const ButtonToast = ({ status, header, msg, btnTxt }) => {
    const toast = useToast()
    const showToast = () => {
        toast({
            title: header,
            description: msg,
            status: status,
            duration: 5000
        })
    }
    return (
        <Button
            bgColor="green.400"
            color="white"
            onClick={() =>
                showToast()
            }
        >
            {btnTxt}
        </Button>
    )
}