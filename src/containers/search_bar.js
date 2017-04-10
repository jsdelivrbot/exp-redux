import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
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