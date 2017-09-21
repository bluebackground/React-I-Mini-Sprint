import React from 'react';
// import PropTypes from 'prop-types';

export default class Movie extends React.Component {
  render() {
    return (
      <li key={this.props.index}>
        {this.props.title}
      </li>
    );
  }
}
