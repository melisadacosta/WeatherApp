import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem/ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes'
]

class ForescastExtended extends React.Component{
    renderForecastItemDays(){
        return days.map( day => (<ForecastItem weekDay={day} hour={10}/>))
    }
    render(){
        const {city} = this.props;
        return(
            <div className='ForescastExtended'>
                <h1>Pronostico Extendido para {city}</h1>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}
ForescastExtended.propsTypes={
    city: PropTypes.string.isRequired,
}
export default ForescastExtended