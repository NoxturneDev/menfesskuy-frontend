import React, { Children } from 'react'
import {
    Input,
    InputGroup,
    FormControl
} from "@chakra-ui/react";


function FormInput({ placeholder, state, type, children}) {
    return (
        <>
            <FormControl>
                <InputGroup>
                    <Input
                        type={type ? "text" : "password"}
                        placeholder={placeholder}
                        onChange={(e) => {
                            state(e.target.value)
                        }
                        }
                    />
                    {children}
                </InputGroup>
            </FormControl>
        </>
    )
}

export default FormInput