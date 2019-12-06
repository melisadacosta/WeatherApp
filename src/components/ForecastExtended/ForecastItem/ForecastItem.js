import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../../WeatherData/WeatherData'

const data= {
    temperature: 10,
    humidity: 20,
    wind: 'normal',
    weatherState: 'normal' ,
}

const ForecastItem = ({ weekDay, hour }) => (
    <div className='ForescastItem'>
        {weekDay}
        <p>Hora: {hour} hs</p>
        <WeatherData data={data}/>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}
export default ForecastItem