import React from 'react'
import { CityProvider } from './contexts/CityContext'
import './App.css';
import SearchInput from './components/SearchInput/SearchInput';

function App() {
  return (
    <CityProvider>
      <SearchInput />
    </CityProvider>
  );
}

export default App;
