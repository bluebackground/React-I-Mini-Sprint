// Import React from react.
import React from 'react';
// import PropTypes from 'prop-types';

import Movie from './Movie.js';

// Create a const arrow function called MoviesList.
  // Return an unordered list
    // Inside the unordered list, embed a javascript expression (curly brackets).
      // Inside the javascript expression, map the movies array
        // The function inside map should take in two arguments, movie and i (for index).
        // The function should return a list item, with a javascript expression movie (the same variable as map).
        // The list item should have an attribute called key, that takes in i as a javascript expression.
// Outside the arrow function, export the function MoviesList as a default.

export default class MoviesList extends React.Component {
  moviesArrToJSX (movies) {
    return movies.map((movie, index) => {
      return (
        <Movie key={index} title={movie} index={index}/>
      );
    });
  }
  render() {
    return (
      <ul>
        {this.moviesArrToJSX(this.props.movies)}
      </ul>
    );
  }
}

// MoviesList.propTypes = {
//   movies: PropTypes.array.isRequired;
// }
//
// Movies.defaultProps = {
//   // movies:
// }
