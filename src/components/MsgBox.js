import React from "react";
import axios from "axios";
import {
  Box,
  Text,
  Stack
} from "@chakra-ui/react";

function MsgBox({sender, to, msg}) {
  return (
    <Box
      p={9}
      display={{ md: "flex" }}
      borderWidth={1}
      margin={2}
    >
      <Stack
        align={{ base: "center", md: "stretch" }}
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
      >
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          From : {sender}
        </Text>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="lg"
          letterSpacing="wide"
          color="teal.600"
        >
          To : {to}
        </Text>
        <Text my={2} color="gray.500">
          msg: {msg}
        </Text>
      </Stack>
    </Box>
  );
}

export default MsgBox;
