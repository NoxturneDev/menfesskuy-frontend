import React from 'react'
import { Button } from '@chakra-ui/react'
function Buttons({ txt, color, bg, hover, custom, event }) {
    return (
        <Button
            style={custom}
            borderRadius="sm"
            px={[4, 6]}
            type="submit"
            bgColor={bg == "none" ? 'none' : bg}
            fontSize="sm"
            color={!color ? 'main.500' : color}
            _hover={hover}
            fontWeight="medium"
            letterSpacing="2px"
            textTransform="uppercase"
            onClick={event}
            boxShadow="lg"
            variant={!bg ? "ghost" : "fill"}
        >
            {txt}
        </Button>
    )
}

export default Buttons