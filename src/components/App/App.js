import React from 'react';
import '../../css/bootstrap.min.css';
import './App.css';
import SwapiService from '../../services/SwapiService.js';

export default class App extends React.Component () {

  state = {}

  render() {
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
      <div className="App">
        App
      </div>
    );
  }
}
