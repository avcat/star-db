import React from 'react';
import '../../css/bootstrap.min.css';
import './App.css';
import SwapiService from '../../services/SwapiService.js';

import Header from '../Header';
import Details from '../Details';
import List from '../List';

const App = () => {

  const swapi = new SwapiService();

  const get_people = async () => {
    const people_array = await swapi.get_all_people();
    people_array.forEach(person => {
      console.log( 'People:', person.name );
    });
  }
  get_people();

  const get_planet = async () => {
    const result = await swapi.get_single_planet( 1 );
    console.log( 'Planet:', result );
  }
  get_planet();

  return (
    <div className="App p-4">
      <Header />
      {/* TODO: Pass props to Details */}
      <Details />

      {/* TODO: Pass props to List */}
      <List add_class={'all'} />
      <Details add_class={'all'} />
    </div>
  );

}

export default App;
