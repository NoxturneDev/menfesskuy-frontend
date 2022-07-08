import React from "react";
import axios from "axios";
import {
  Box,
  Text,
  Stack
} from "@chakra-ui/react";

function Card({name}) {
  const getLink = async() => {
    const msg = await axios.get('http://localhost/3001/api/get/message')
  }
  return (
    <Box
      p={4}
      display={{ md: "flex" }}
      maxWidth="32rem"
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
          {name}
        </Text>
        <Text my={2} color="gray.500">
          text
        </Text>
      </Stack>
    </Box>
  );
}

export default Card;
