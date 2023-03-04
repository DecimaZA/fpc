import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import './App.css';
import Spa1 from './components/Spa1';
import Spa2 from './components/Spa2';
import Spa3 from './components/Spa3';

const App = () => (
  <ChakraProvider>
    <Spa1 />
    <Spa2 />
    <Spa3 />
  </ChakraProvider>
);

export default App;
