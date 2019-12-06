import React from 'react';
import Location from '../Location/Location';
import WeatherData from '../WeatherData/WeatherData';
import PropTypes from 'prop-types'
import './WeatherLocation.scss';
import { CLOUDY, THUNDER, DRIZZLE, RAIN, SNOW, SUN } from '../../constants/weathers';
import convert from 'convert-units';
import { CircularProgress } from 'material-ui';



const url = "https://api.openweathermap.org/data/2.5/weather"


class WeatherLocation extends React.Component {
    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
    }
    
    getTemperature = kelvin => {
        return convert(kelvin).from('K').to('C').toFixed(2)
    }
    getData = weather_data => {
        const { weather } = weather_data;  
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather);
        const temperature = this.getTemperature(temp)
        const data = {
            humidity,
            temperature,
            wind: `${speed} m/s`,
            weatherState,
        }
        // console.log(data)
        return data;
    }
    getWeatherState = weather => {
        const {id} = weather[0];

        if (id < 300){
            return THUNDER;
        }else if (id <400){
            return DRIZZLE;
        }else if (id <600){
            return RAIN;
        } else if (id < 700){
            return SNOW;
        }else if (id === 800){
            return SUN;
        }else{
            return CLOUDY;
        }
    }
    componentWillMount() {
        const { city } = this.state;
        const api_key = "48429781fec7e3981410153ea0d75313";
        const api_weather = `${url}?q=${city}&APPID=${api_key}`
        fetch(api_weather)
            .then(res => res.json())
            .then(weather_data => {
                const data = this.getData(weather_data);
                this.setState({ data })
                // console.log(weather)
            })
    }

    render() {
        const { data, city } = this.state;
        const { onWeatherLocationClick } = this.props;
        return (
            <div className='weatherLocation' onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data} /> : 
                <CircularProgress size={60} thickness={7} />}
            </div>
        )
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick : PropTypes.func,
}
export default WeatherLocation;