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
            my={[4, 2]}
            >
                <InputGroup>
                    <Input
                        type={type ? "text" : "password"}
                        placeholder={placeholder}
                        onChange={(e) => {
                            state(e.target.value)
                        }
                        }
                        focusBorderColor="dark.900"
                        borderColor="gray.700"
                        color="gray.400"
                        fontWeight="semibold"
                        fontSize={["sm", "md"]}
                        required
                    />
                    {children}
                </InputGroup>
            </FormControl>
        </>
    )
}

export default FormInput