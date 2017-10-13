import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app-wrap">
        <Navigation/>
        <Home/>
      </div>
    );
  }
}

module.exports = App;
