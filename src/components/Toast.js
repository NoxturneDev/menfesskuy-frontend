import {
    createStandaloneToast,
    Box,
    Flex,
    Text,
    HStack
} from "@chakra-ui/react"
import React from "react"
import { CheckIcon, WarningIcon } from '@chakra-ui/icons'


const { toast } = createStandaloneToast()

function ErrorToast({ msg }) {
    return (
        <>
            <Box
                color='gray.200'
                p={3}
                bg='gray.800'
                boxShadow="lg">
                <Flex
                    justifyContent="start"
                    alignItems="center"
                    gap={4}>
                    <WarningIcon w={6} h={6} color="main.100"/>
                    <HStack>
                        <Text color="main.100" fontWeight="semibold">ERROR!</Text>
                        <Text>{msg}</Text>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

function SuccessToast({ msg }) {
    return (
        <>
            <Box
                color='gray.200'
                p={3}
                bg='gray.800'
                boxShadow="lg">
                <Flex
                    justifyContent="start"
                    alignItems="center"
                    gap={4}>
                    <CheckIcon w={6} h={6} color="main.500" />
                    <HStack>
                        <Text color="main.500" fontWeight="semibold">BERHASIL!</Text>
                        <Text>{msg}</Text>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}

function customToast(status, msg) {
    toast({
        position: "top",
        isClosable: true,
        render: () => (
            status === "error" && status !== "" ? <ErrorToast msg={msg} /> : <SuccessToast msg={msg} />
        ),
    })
}



export default customToast