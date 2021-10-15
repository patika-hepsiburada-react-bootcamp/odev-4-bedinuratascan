import React from 'react'
import SearchInput from './SearchInput'
import Weather from './Weather'
import { Body } from './styles/Body.styled'
import { Container } from './styles/Container.styled'
import { Search } from './styles/Search.styled'
import { WeatherContainer } from './styles/WeatherContainer.styled'

const AppContainer = () => {
    return (
        <Body>
            <Container>
                <Search>
                    <SearchInput />
                </Search>
                <WeatherContainer>
                    <Weather />
                </WeatherContainer>
            </Container>
        </Body>
    )
}

export default AppContainer
