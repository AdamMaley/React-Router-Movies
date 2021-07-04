import React from 'react';
import { NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink active="true" to={`/movies/${movie.id}`}>
      <span key={movie.id} className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <NavLink to="/">
    <div className="home-button">Home</div>
    </NavLink>
  </div>
);

export default SavedList;
