import React from 'react';
import {
  ChakraProvider,
  theme

} from '@chakra-ui/react';
import Home from './Pages/Home/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home></Home>
    </ChakraProvider>
  );
}

export default App;
