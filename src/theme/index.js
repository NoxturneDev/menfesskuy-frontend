import { extendTheme, theme as base } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const theme = extendTheme({
  colors: {
    dark: {
      500: "#8A00FF",
      900:  "#6700FF"
    },
    mid: "#B700FF",
    light: {
      500: "#DA00FF",
      900: "#F500FF"
    }
  },
  fonts:{
    body: `Poppins, ${base.fonts?.body}`
  }
})

export default theme