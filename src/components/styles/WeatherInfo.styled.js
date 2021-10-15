import styled from 'styled-components'

export const WeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #fff;
`;

export const CurrentLocation = styled.div`
    color: white;
    font-size: 23px;
    font-weight: 400;
    text-align: center;
`;

export const CurrentWeatherDescription = styled.div`
    color: #61d9fb;
    font-weight: 300;
    font-size: 15px;
    margin-top: 24px;
    &:first-letter {
        text-transform: uppercase;
    }
`;

export const CurrentIcon = styled.div`
    position: relative;
`;

export const ActualTemperature = styled.div`
    font-size: 36px;
`;

export const OtherWeatherInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const OtherWeatherTopInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 5px;
`;

export const OtherWeatherTopLeftInfo = styled.div`
    margin-right: 15px;
`;

export const OtherWeatherTopRightInfo = styled.div`
    margin-left : 15px
`;

export const OtherWeatherBottomInfo = styled.div`
    margin-top: 20px;
`;

export const TempUnit = styled.span`
    font-size: 20px;
    letter-spacing: 2px;
    position: relative;
    bottom: 10px;
    left: 5px;
`;
