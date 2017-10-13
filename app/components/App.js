import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <div className="app-wrap">
          <Navigation/>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
