import React from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../../WeatherData/WeatherData'


const ForecastItem = ({ weekDay, hour, data }) => (
    <div className='ForescastItem'>
        {weekDay}
        <p>Hora: {hour} hs</p>
        <WeatherData data={data} />
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data : PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    })
}
export default ForecastItem