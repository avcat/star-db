import React from 'react';

import '../../css/bootstrap.min.css';
import './App.css';
import SwapiService from '../../services/SwapiService.js';

import Header from '../Header';
import Details from '../Details';
import List from '../List';

export default class App extends React.Component {

  SwapiService = new SwapiService();

  state = {
    people: null,
    planets: null,
    starships: null
  }

  constructor() {
    super();
    this.get_people();
    this.get_planets();
    this.get_starships();
  }

  get_people = async () => {
    const people = await this.SwapiService.get_all_people();
    this.setState({people});
  }

  get_planets = async () => {
    const planets = await this.SwapiService.get_all_planets();
    this.setState({planets});
  }

  get_starships = async () => {
    const starships = await this.SwapiService.get_all_starships();
    this.setState({starships});
  }

  render() {

    const {
      people,
      planets,
      starships
    } = this.state;


    return (
      <div className="App p-4">
        <Header />
        {/* TODO: Pass props to Details */}
        <Details />

        {/* TODO: Pass props to List */}
        <List
          add_class={'all'}
        />
        <Details add_class={'all'} />
      </div>
    );
  }

}
