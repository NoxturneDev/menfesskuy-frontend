import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import FormInput from './FormInput';

function Form({ submitFunc }) {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [msg, setMsg] = useState('')

    const handleShowClick = () => setShowPassword(!showPassword);

    return (
        <>
            <form onSubmit={e => {
                e.preventDefault()
                submitFunc(username, password)
            }}>
                <Stack
                    spacing={4}
                    p="1rem"
                    backgroundColor="whiteAlpha.900"
                    boxShadow="md"
                >
                    <FormInput
                        placeholder="username"
                        type="text"
                        state={setUsername}
                    >
                    </FormInput>
                    <FormInput
                        placeholder="Password"
                        type={showPassword}
                        state={setPassword}
                    >
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                {showPassword ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </FormInput>
                    <Stack>
                        <Text
                            color="red.500"
                        >{msg}</Text>
                    </Stack>
                    <Button
                        borderRadius={0}
                        type="submit"
                        variant="solid"
                        colorScheme="teal"
                        width="full"
                    >
                        Login
                    </Button>
                </Stack>
            </form>
        </>
    )
}

export default Form