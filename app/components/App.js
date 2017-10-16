import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
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
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          {spBtn}
        </div>
      </BrowserRouter>
    );
  }
}

module.exports = App;
