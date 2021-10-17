import React from 'react'
import SearchInput from './SearchInput'
import Weather from './Weather'
import { Body } from './styles/Body.styled'
import { Container } from './styles/Container.styled'
import { Search } from './styles/Search.styled'
import { WeatherContainer } from './styles/WeatherContainer.styled'
import Footer from '../components/Footer'   

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
            <Footer/>
        </Body>
    )
}

export default AppContainer
