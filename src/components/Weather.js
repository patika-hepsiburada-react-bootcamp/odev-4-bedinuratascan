import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from '../query/index'
import Error from './Error';
import Loading from './Loading';
import { useCity } from '../contexts/CityContext'
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WeatherIcon from '../utils/WeatherIcon';
import ConvertTemp from '../utils/ConvertTemp';
import { WeatherInfo, CurrentLocation, 
    CurrentWeatherDescription, CurrentIcon, ActualTemperature, 
    OtherWeatherInfo, 
    OtherWeatherTopInfo,
    OtherWeatherTopLeftInfo,
    OtherWeatherTopRightInfo,
    OtherWeatherBottomInfo,
    TempUnit} from './styles/WeatherInfo.styled'

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
        <WeatherInfo>
            <CurrentLocation>
                {data.getCityByName.name}, {data.getCityByName.country}
            </CurrentLocation>
            <CurrentWeatherDescription>
                {data.getCityByName.weather.summary.description}
            </CurrentWeatherDescription>
            <CurrentIcon>
                <WeatherIcon
                    code={data.getCityByName.weather.summary.icon}
                    size={90}
                    alt={data.getCityByName.weather.summary.description}
                />
            </CurrentIcon>
            <ActualTemperature>
                {ConvertTemp(data.getCityByName.weather.temperature.actual)}
                <TempUnit>°C </TempUnit>
            </ActualTemperature>
            <OtherWeatherInfo>
                <OtherWeatherTopInfo>
                    <OtherWeatherTopLeftInfo>
                        <ThermostatOutlinedIcon />
                        Real feel : {ConvertTemp(data.getCityByName.weather.temperature.feelsLike)}°C
                    </OtherWeatherTopLeftInfo>
                    <OtherWeatherTopRightInfo>
                        <OpacityIcon />
                        Humidity : {data.getCityByName.weather.clouds.humidity}%
                    </OtherWeatherTopRightInfo>
                </OtherWeatherTopInfo>
                <OtherWeatherBottomInfo>
                    <AirOutlinedIcon />
                    Wind Speed : {data.getCityByName.weather.wind.speed} km/h
                </OtherWeatherBottomInfo>
            </OtherWeatherInfo>
        </WeatherInfo>
    )
}

export default Weather

