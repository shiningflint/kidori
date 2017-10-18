import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Dictionary from './Dictionary';
import Contact from './Contact';
import SPbtn from './SPbtn';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const smartphoneWidth = 550;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spnavshow: false,
    };
    this.spNavToggle = this.spNavToggle.bind(this);
  }

  spNavToggle() {
    if (window.innerWidth <= smartphoneWidth) {
      this.setState({
        spnavshow: !this.state.spnavshow,
      });
    }
  }

  render() {
    let spBtn = null;
    if (window.innerWidth <= smartphoneWidth) {
      spBtn = <SPbtn onClick={this.spNavToggle} spShow={this.state.spnavshow} />
    }
    return(
      <BrowserRouter>
        <div className="app-wrap">
          <Navigation
            spShow={this.state.spnavshow}
            onClick={this.spNavToggle} />
          <Route path="/" exact
            render={(props) => (<Home spWidth={smartphoneWidth} />)} />
          <Route
            path="/products"
            render={(props) => (<Products spWidth={smartphoneWidth} />)} />
          <Route
            path="/dictionary"
            render={(props) => (<Dictionary spWidth={smartphoneWidth} />)} />
            <Route
              path="/contact"
              render={(props) => (<Contact spWidth={smartphoneWidth} />)} />
          {spBtn}
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
