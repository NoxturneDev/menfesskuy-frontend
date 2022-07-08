import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

function AlertFailure({open, title, msg}) {
    if(!open) return null
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

export default AlertFailure