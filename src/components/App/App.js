import React from 'react';
import '../../css/bootstrap.min.css';
import './App.css';

import Header from '../Header';
import SingleItem from '../SingleItem/SingleItem';

export default class App extends React.Component {

  render() {
    return (
      <div className="App p-4">
        <Header />
        <SingleItem type={'planet'} id={2} />
        <SingleItem type={'person'} id={1} />
        <SingleItem type={'starship'} id={5} />
      </div>
    );
  }

}