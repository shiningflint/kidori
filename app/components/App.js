import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="app-wrap">
        <Navigation/>
        {/*<Home/>*/}
        <Products/>
      </div>
    );
  }
}

module.exports = App;
