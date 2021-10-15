import React from 'react'
import { CityProvider } from './contexts/CityContext'
import AppContainer from './components/AppContainer'

function App() {
  return (
    <CityProvider>
      <AppContainer />
    </CityProvider>
  );
}

export default App;
