import {
    createStandaloneToast
} from "@chakra-ui/react"
import React from "react"

const { toast } = createStandaloneToast()

function customToast(status, title, msg) {
    toast({
        title: title,
        description: msg,
        status: status,
        duration: 9000,
        isClosable: true,
    })
}

export default customToast