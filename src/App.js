import React from 'react';
import './App.css';
import ForescastExtended from './components/ForecastExtended/ForescastExtended'
import LocationList from './components/LocationList/LocationList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid'
import { AppBar } from 'material-ui';

const cities = [
  'Buenos Aires,ar',
  'Bogota,col',
  'Santiago,cl',
];

class App extends React.Component {
  state = {
    city: null,
  }
  handleSelectedLocation = city => {
    this.setState({ city: city });
  }
  render() {
    const { city } = this.state
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar className='app-bar' title='LATAMweather' />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <div className='detail'>
                {
                  city === null ?
                    <h1>Selecciona una ciudad para ver el pronostico extendido</h1> :
                    <ForescastExtended city={city} />
                }
              </div>
            </Col>
          </Row>

        </Grid>
      </MuiThemeProvider>
    );
  }
}



export default App;
