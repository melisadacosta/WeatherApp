import React from 'react';
import PropTypes from 'prop-types';
// import ForecastItem from './ForecastItem/ForecastItem';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miércoles',
//     'Jueves',
//     'Viernes'
// ]
// const data = {
//     temperature: 10,
//     humidity: 20,
//     wind: 'normal',
//     weatherState: 'normal',
// }


const url = "https://api.openweathermap.org/data/2.5/forecast"
const api_key = "48429781fec7e3981410153ea0d75313";

class ForescastExtended extends React.Component {
    state = {
        forecastData: null,
    }
    renderForecastItemDays() {
        return "Render Items"
        // return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data} />))
    }
    renderProgress() {
        return <h3>Cargando pronostico extendido</h3>;
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city},&appid=${api_key}`;

        fetch(url_forecast).then(
            res => res.json())
            .then(weather_data => {
                console.log(weather_data)
            })
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div className='ForescastExtended'>
                <h1>Pronostico Extendido para {city}</h1>
                {forecastData ?
                    this.renderForecastItemDays() :
                    this.renderProgress()}
            </div>
        )
    }
}
ForescastExtended.propsTypes = {
    city: PropTypes.string.isRequired,
}
export default ForescastExtended