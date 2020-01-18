import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const  addToSavedList= movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList}/>} />
    </div>
  );
};

export default App;
