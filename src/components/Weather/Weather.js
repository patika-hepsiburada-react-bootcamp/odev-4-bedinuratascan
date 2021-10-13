import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../../query/index'
import Error from '../Error/Error';
import Loading from '../Loading/loading';


const Weather = () => {
    const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
        variables: { name: "London" }
    });

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <Error/>;
    }
    return (
        <div>
            <h1>Weather</h1>
            <div>
                {
                    data.getCityByName.name
                }
            </div>
        </div>
    )
}

export default Weather

