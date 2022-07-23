import React from 'react';

import '../../css/bootstrap.min.css';
import './App.css';

import Header from '../Header';

import Planet from '../Planet';
import Planets from '../Planets';

export default class App extends React.Component {

  render() {
    return (
      <div className="App p-4">
        <Header />
        <Planet />
        <Planets />
      </div>
    );
  }

}