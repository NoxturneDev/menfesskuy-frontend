import React from 'react'
import { Button } from '@chakra-ui/react'
function Buttons({ txt, color, bg, hover, custom, event }) {
    return (
        <Button
            style={custom}
            borderRadius="sm"
            type="submit"
            bgColor={!bg ? "main.500" : bg}
            fontSize="sm"
            color={!color ? 'main.500' : color}
            _hover={hover}
            fontWeight="medium"
            letterSpacing="2px"
            textTransform="uppercase"
            onClick={event}
        >
            {txt}
        </Button>
    )
}

export default Buttons