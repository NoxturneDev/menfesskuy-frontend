import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colorTheme = extendTheme({
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
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={colorTheme}>
  <App />
</ChakraProvider>
);
