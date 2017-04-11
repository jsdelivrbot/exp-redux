import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}

// getting the "global" state
function mapStateToProps({ weather }) { //doing { weather } is the same as defining a const weather = state.weather
  return { weather };// in es6, this is the same as { weather: weather }
}

export default connect(mapStateToProps) (WeatherList);
