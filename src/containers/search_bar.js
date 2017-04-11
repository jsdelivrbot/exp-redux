import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // call the action creator here
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render () {
    return (
      <form
        className="input-group"
        onSubmit={this.handleSubmit}
      >
        <input
          placeholder="Get a five-day forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.handleChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

// this is happening to allow us to use the fetchWeather inside the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps) (SearchBar);
