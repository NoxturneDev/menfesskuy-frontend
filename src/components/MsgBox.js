import React from "react";
import {
  Box,
  Text,
  Stack
} from "@chakra-ui/react";

function MsgBox({ sender, msg }) {
  return (
    <Box
      p={[4, 8]}
      display={{ md: "flex" }}
      boxShadow="md"
      rounded="md"
      minW="2xs"
      margin={[2, 5]}
      bg="gray.800"
      maxW="xs"
      zIndex="1"
    >
      <Stack
        overflow="clip"
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: 4, md: 0 }}
      >
        <Text
          fontWeight="semi-bold"
          textTransform="uppercase"
          fontSize="sm"
          color="gray.200"
        >
          From : {sender}
        </Text>
        <Text color="gray.400">
          message: <br />{msg}
        </Text>
      </Stack>
    </Box>
  );
}

export default MsgBox;
