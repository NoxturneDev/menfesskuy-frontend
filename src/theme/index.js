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
  },
  components: {
    Alert: {
      variants: {
        subtle: (props) => { // only applies to `subtle` variant
          const { colorScheme: c } = props
          if (c !== "blue") {
            // use original definition for all color schemes except "blue"
            return base.components.Alert.variants.subtle(props)
          }
          return {
            container: {
              bg: `${c}.500`, // or literal color, e.g. "#0984ff"
            },
          }
        }
      }
    }
  }
})


export default theme