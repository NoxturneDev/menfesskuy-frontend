import React from 'react'
import { Flex, Stack } from '@chakra-ui/react'
function Card({ children, width, height, position }) {
    if (position == "flex") {
        return (<>
            <Flex
                w={width}
                h={height}
                bg="dark.500"
                boxShadow="lg"
                rounded="md"
                p={[4, 5]}
                justifyContent="center"
                alignItems="center"
                zIndex="base"
                m={[4, 6]}
            >
                {children}
            </Flex>
        </>)
    }
    if (position == "stack") {
        return (<>
            <Stack
                w={width ? 'max-content' : width}
                h={height ? 'max-content' : height}
                bg="dark.500"
                boxShadow="lg"
                rounded="md"
                p={[4, 5]}
                align="center"
                space={[2, 4]}
                zIndex="base"
                m={[4, 6]}
            >
                {children}
            </Stack>
        </>)
    }
}

export default Card