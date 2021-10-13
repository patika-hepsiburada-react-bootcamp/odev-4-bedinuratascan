import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../../query/index'
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { useCity } from '../../contexts/CityContext'
import './Weather.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';


import WeatherIcon from '../../utils/WeatherIcon'

const Weather = () => {
    const { city } = useCity();
    const { loading, error, data } = useQuery(GET_WEATHER_QUERY, {
        variables: { name: city }
    });

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }
    return (
        <div className="weatherInfo">
            <div className="current-location">
                {data.getCityByName.name}, {data.getCityByName.country}
            </div>
            <div className="current-icon">
                <WeatherIcon
                    code={data.getCityByName.weather.summary.icon}
                    size={60}
                    alt={data.getCityByName.weather.summary.description}
                />
            </div>
            <h5 className="current-weather-description">
                {data.getCityByName.weather.summary.description}
            </h5>
            <h6 className="current-temperature">
                {Math.round(data.getCityByName.weather.temperature.actual)}
                <span className="unit">°C </span>
            </h6>
            <h6 className="max-and-min-temperatures">
                <ArrowUpwardIcon />
                High:
                <span className="current-max-temprature">
                    {Math.round(data.getCityByName.weather.temperature.max)}°
                </span>
                <ArrowDownwardIcon />
                Low:
                <span className="current-min-temperature">
                    <strong> {Math.round(data.getCityByName.weather.temperature.min)}°</strong>
                </span>
            </h6>
            <div>
                <ThermostatOutlinedIcon />
                Real feel : {data.getCityByName.weather.temperature.feelsLike}
            </div>
            <div>
                <OpacityIcon />
                Real feel : {data.getCityByName.weather.clouds.humidity}
            </div>
            <div>
                <AirOutlinedIcon/>
                Wind Speed : {data.getCityByName.weather.wind.speed}
            </div>
        </div>
    )
}

export default Weather

