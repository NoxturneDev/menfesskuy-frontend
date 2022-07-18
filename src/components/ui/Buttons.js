import React from 'react'
import ButtonBase from './ButtonBase'
export const PrimaryBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="main.500"
                hover={{ bg: "main.500", color: "gray.900" }}
                event={event}
            />
        </>
    )
}

export const PrimaryFillBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                color="gray.900"
                bg="main.500"
                hover={{ opacity: "0.8" }}
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
                color="accent"
                hover={{ bg: "accent", color: "gray.900" }}
                event={event}
            />
        </>
    )
}

export const SecondaryFillBtn = ({ txt, event }) => {
    return (
        <>
            <ButtonBase
                txt={txt}
                bg="accent"
                color="gray.900"
                hover={{ opacity: "0.8" }}
                event={event}
            />

        </>
    )
}

// // STYLE LATER ON
// export const CancelBtn = ({ txt }) => {
//     return (
//         <>
//             <ButtonBase
//                 txt={txt}
//                 color="dark.500"
//                 bg="gray.800"
//                 hover={{ bg: "dark.500" }}
//                 custom={{ border: `2px solid` }} />

//         </>
//     )
// }


// export const CancelOutlineBtn = ({ txt }) => {
//     return (
//         <>
//             <ButtonBase
//                 txt={txt}
//                 color="dark.500"
//                 bg="gray.800"
//                 hover={{ bg: "dark.500" }}
//                 custom={{ border: `2px solid` }} />

//         </>
//     )
// }



