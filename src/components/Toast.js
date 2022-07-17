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
                boxShadow="lg"
                borderBottomWidth="3px"
                borderBottomColor="light.500">
                <Flex
                    justifyContent="start"
                    alignItems="center"
                    gap={4}>
                    <WarningIcon w={6} h={6} color="light.500"/>
                    <HStack>
                        <Text color="light.500" fontWeight="semibold">ERROR!</Text>
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
                // rounded="lg"
                boxShadow="lg"
                borderBottomWidth="3px"
                borderBottomColor="blue.400">
                <Flex
                    justifyContent="start"
                    alignItems="center"
                    gap={4}>
                    <CheckIcon w={6} h={6} color="blue.400" />
                    <HStack>
                        <Text color="blue.400" fontWeight="semibold">BERHASIL!</Text>
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
        // title: title,
        // description: msg,
        // status: status,
        // duration: 9000,
        isClosable: true,
        render: () => (
            status === "error" && status !== "" ? <ErrorToast msg={msg} /> : <SuccessToast msg={msg} />
        ),
    })
}



export default customToast