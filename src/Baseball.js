import React from 'react'
import './Dashboard.css'
import Dashboard from './Dashboard'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});

export default function Baseball() {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
    </ChakraProvider>
  )
}
