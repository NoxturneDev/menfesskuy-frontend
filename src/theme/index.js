import { extendTheme, theme as base } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const theme = extendTheme({
  colors: {
    main: {
      100: "#B251AF",
      500: "#CE219B",
      900: "#410563"
    },
    second: {
      100: "#BDB0CC",
      900: "#413060",
    },
    dark: {
      100: "#3F0463",
      500: "#270B39",
      900: "#160238"
    },
    accent: "#FA9552"
  },
  fonts: {
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