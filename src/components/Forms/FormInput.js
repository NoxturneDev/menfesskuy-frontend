import React from 'react'
import {
    Input,
    InputGroup,
    FormControl
} from "@chakra-ui/react";


function FormInput({ placeholder, state, type, children}) {
    return (
        <>
            <FormControl 
            w={{base: "100%"}}
            my={[5, 4]}
            >
                <InputGroup>
                    <Input
                        type={type ? "text" : "password"}
                        placeholder={placeholder}
                        onChange={(e) => {
                            state(e.target.value)
                        }
                        }
                        focusBorderColor="main.500"
                        borderColor="gray.600"
                        color="gray.400"
                        fontWeight="light"
                        letterSpacing="1px"
                        fontSize={["xs", "sm"]}
                        isRequired
                        autoComplete='off'
                    />
                    {children}
                </InputGroup>
            </FormControl>
        </>
    )
}

export default FormInput