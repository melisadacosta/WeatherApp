import React from 'react'
import WeatherIcons from 'react-weathericons';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY, THUNDER, DRIZZLE} from '../../constants/weathers';
import PropTypes from 'prop-types';
import './WeatherTemperature.scss'

const stateToIconName = (weatherState) =>{
    switch (weatherState) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        case THUNDER:
            return "day-thunderstore";
        case DRIZZLE:
            return "day-showers";
        default:
            return "day-sunny";
    }
}
const getWeatherIcon = weatherState =>{
    return(<WeatherIcons className='temperature-icon' 
    name={stateToIconName(weatherState)} size="4x" />);
}
const WeatherTemperature = ( { temperature, weatherState} ) =>(
    <div className='weatherTemperature'>
        {getWeatherIcon(weatherState)}
        <span className='temperature-number'>{`${temperature}°c`}</span>
    </div>
);

WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTemperature;