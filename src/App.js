import './App.css';
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from './query/index'

function App() {
  const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
    variables: { name: "London" }
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Weather</h1>
      <div>
        {
          data.getCityByName.name
        }
      </div>
    </div>
  );
}

export default App;
