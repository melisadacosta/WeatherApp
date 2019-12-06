import React from 'react'
import PropTypes from 'prop-types'
import './WeatherExtraInfo.scss'

const WeatherExtraInfo = ({ humidity, wind}) =>(
    <div className='weatherExtraInfo'>
        <div className='humidity-container'>
            <h5>Humedad</h5>
            <span className='extraInfo-humidity'>{`${humidity} %`}</span>
        </div>
        <div className='wind-container'>
        <h5>Vientos</h5>
        <span className='extraInfo-wind'>{`${wind}`}</span>
        </div>
    </div>
)

WeatherExtraInfo.propTypes ={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;