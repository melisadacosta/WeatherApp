import React from 'react'
import WeatherLocation from '../WeatherLocation/WeatherLocation'
import PropTypes from 'prop-types';
import './LocationList.scss';


const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => (
        onSelectedLocation(city)
    )

    const stringToComponent = cities => (
        cities.map(city =>
            (<WeatherLocation
                key={city}
                city={city}
                onWeatherLocationClick={() => handleWeatherLocationClick(city)}
            />))
    )
    return (

        <div className='LocationList'>
            {stringToComponent(cities)}
        </div>
    )
}

LocationList.propTyes = {
    cities: PropTypes.array.isRequired,
}
export default LocationList