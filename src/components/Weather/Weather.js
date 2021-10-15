import './Weather.css'
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../../query/index'
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { useCity } from '../../contexts/CityContext'
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WeatherIcon from '../../utils/WeatherIcon';
import ConvertTemp from '../../utils/ConvertTemp';

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
        <div className="weather__info">
            <div className="current__location">
                {data.getCityByName.name}, {data.getCityByName.country}
            </div>
            <div className="current__weather__description">
                {data.getCityByName.weather.summary.description}
            </div>
            <div className="current__icon">
                <WeatherIcon
                    code={data.getCityByName.weather.summary.icon}
                    size={90}
                    alt={data.getCityByName.weather.summary.description}
                />
            </div>
            <div className="actual__temprature">
                {ConvertTemp(data.getCityByName.weather.temperature.actual)}
                <span className="unit">°C </span>
            </div>
            <div className="other__info">
                <div className="other__top__info">
                    <div className="top__info__left">
                        <ThermostatOutlinedIcon />
                        Real feel : {ConvertTemp(data.getCityByName.weather.temperature.feelsLike)}
                        <span>°C</span>
                    </div>
                    <div className="top__info__right">
                        <OpacityIcon />
                        Humidity : {data.getCityByName.weather.clouds.humidity}
                        <span>%</span>
                    </div>
                </div>
                <div className="other__bottom__info">
                    <AirOutlinedIcon />
                    Wind Speed : {data.getCityByName.weather.wind.speed}
                    <span>km/h</span>
                </div>
            </div>
        </div>
    )
}

export default Weather

