import React from 'react'
import ButtonBase from './ButtonBase'
export const PrimaryBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                bg="dark.500"
                color="gray.800"
                hover={{ bg: "light.500", color: "gray.800" }}
            />
        </>
    )
}

export const PrimaryOutlineBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="dark.500"
                bg="gray.800"
                hover={{ bg: "dark.500", color: "gray.800" }}
                custom={{ border: `2px solid` }} />

        </>
    )
}

export const SecondaryBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                bg="light.500"
                color="gray.800"
                hover={{ bg: "light.900", color: "gray.800" }} />
        </>
    )
}

export const SecondaryOutlineBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="light.500"
                bg="gray.800"
                hover={{ bg: "light.500", color: "gray.800" }}
                custom={{ border: `2px solid` }} />

        </>
    )
}

// STYLE LATER ON
export const CancelBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="dark.500"
                bg="gray.800"
                hover={{ bg: "dark.500" }}
                custom={{ border: `2px solid` }} />

        </>
    )
}


export const CancelOutlineBtn = ({ txt }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="dark.500"
                bg="gray.800"
                hover={{ bg: "dark.500" }}
                custom={{ border: `2px solid` }} />

        </>
    )
}



