import React from 'react'
import { Spinner, Flex, Heading } from '@chakra-ui/react'
function Loader() {
    return (
        <>
            <Flex 
            zIndex="overlay"
            justifyContent="center"
            alignItems="center"
            bgColor="dark.500"
            rounded="md"
            boxShadow="md"
            position="absolute"
            top="0"
            right="0"
            left="0"
            bottom="0"
            flexDir="column"
            gap={4}>
                <Spinner
                    thickness='7px'
                    speed='0.75s'
                    color='main.500'
                    size='xl'
                />
                <Heading fontSize={["lg", "2xl"]} color="main.100">
                    LOADING
                </Heading>
            </Flex>
        </>
    )
}

export default Loader