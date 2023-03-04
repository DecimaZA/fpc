import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import './App.css';
import Spa1 from './components/Spa1';

const App = () => (
  <ChakraProvider>
    <Spa1 />
  </ChakraProvider>
);

export default App;
