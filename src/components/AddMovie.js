import React from 'react';

export default class AddMovies extends React.Component {
  render () {
    return (
      <div>
        <form>
          <input placeholder="Enter movie title" type="text"/>
          <button>Add Movie</button>
        </form>
      </div>
    );
  }
}
