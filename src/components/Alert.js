import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,

} from '@chakra-ui/react'

export const AlertFailure = ({ open, title, msg }) => {
    if (open !== "failure" || !open) return null
    return (
        <>
            <Alert status='error'>
                <AlertIcon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{msg}</AlertDescription>
            </Alert>
        </>
    )
}

export const AlertSuccess = ({ open, title, msg }) => {
    if (open !== "success" || !open) return null
    return (
        <>
            <Alert status='success'>
                <AlertIcon />
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{msg}</AlertDescription>
            </Alert>
        </>
    )
}
