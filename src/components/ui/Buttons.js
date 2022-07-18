import React from 'react'
import ButtonBase from './ButtonBase'
export const PrimaryBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                bg="dark.500"
                color="gray.800"
                hover={{ bg: "light.500", color: "gray.800" }}
                event={event}
            />
        </>
    )
}

export const PrimaryOutlineBtn = ({ txt, event}) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="dark.500"
                bg="gray.800"
                hover={{ bg: "dark.500", color: "gray.800" }}
                custom={{ border: `2px solid` }} 
                event={event}
                />
                

        </>
    )
}

export const SecondaryBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                bg="light.500"
                color="gray.800"
                hover={{ bg: "light.900", color: "gray.800" }} 
                event={event}
                />
        </>
    )
}

export const SecondaryOutlineBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="light.500"
                bg="gray.800"
                hover={{ bg: "light.500", color: "gray.800" }}
                custom={{ border: `2px solid` }} 
                event={event}
                />

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



