import React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Weather from '../Weather/Weather'
import './Container.css'

const Container = () => {
    return (
        <div className="body">
            <div className="container">
                <div className="search">
                    <SearchInput />
                </div>
                <div className="weather">
                    <Weather />
                </div>
            </div>
        </div>
    )
}

export default Container
