import React from 'react'
import { Button } from '@chakra-ui/react'
function Buttons({ txt, color, bg, hover, custom}) {
    return (
        <Button
            borderRadius="sm"
            type="submit"
            bgColor={!bg ? "dark.500" : bg}
            fontSize="sm"
            color={!color ? 'dark.500' : color}
            _hover={hover}
            style={custom}
            fontWeight="medium"
            letterSpacing="2px"
            textTransform="uppercase"
        >
            {txt}
        </Button>
    )
}

export default Buttons