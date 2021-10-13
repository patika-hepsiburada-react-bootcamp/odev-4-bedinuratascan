import React from 'react'
import { CityProvider } from './contexts/CityContext'
import './App.css';
import Container from '../src/components/Container/Container'

function App() {
  return (
    <CityProvider>
      <Container/>
    </CityProvider>
  );
}

export default App;
