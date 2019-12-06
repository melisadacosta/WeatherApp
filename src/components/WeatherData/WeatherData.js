import React from 'react'
import WeatherExtraInfo from '../WeatherExtraInfo/WeatherExtraInfo'
import WeatherTemperature from '../WeatherTemperature/WeatherTemperature'
import PropTypes from 'prop-types'
import './WeatherData.scss'

const WeatherData = ( {data}) => {
    const { temperature, weatherState, humidity, wind} = data;
    return(
    <div className='WeatherData'>
        <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>)
}

WeatherData.propTypes = {
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}
export default WeatherData;