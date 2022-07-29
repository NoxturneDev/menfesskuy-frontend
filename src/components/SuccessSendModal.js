import React from 'react'
import Card from './ui/Card'
import { Heading, ButtonGroup, Flex } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { PrimaryBtn, SecondaryBtn } from './ui/Buttons'
function SuccessSendModal({ hidden }) {
    if (hidden) return null
    return (
        <>
            <Flex
                w={["80vw", "50vw"]}
                h={["60vh", "50vh"]}
                bg="dark.500"
                boxShadow="lg"
                rounded="md"
                p={[4, 5]}
                justifyContent="center"
                alignItems="center"
                zIndex="overlay"
                m={[4, 6]}
                position="absolute"
                flexDirection='column'
                gap={[10, 4]}
            >
                <CheckIcon color="main.500" w={16} h={16} />
                <Heading color="gray.200" textAlign="center">Pesan berhasil dikirim</Heading>
                <ButtonGroup display="flex" flexDirection={['column', 'row']} gap={[6, 4]} w="full" justifyContent="center" alignItems="center">
                    <PrimaryBtn txt="Kirim lagi ga cuy" event={e => {
                        e.preventDefault()
                        window.location.reload()
                    }} />
                    <Link to="/">
                        <SecondaryBtn txt="Bosen ga lah udh" />
                    </Link>
                </ButtonGroup>
            </Flex>
        </>
    )
}

export default SuccessSendModal