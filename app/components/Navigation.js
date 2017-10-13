import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="navigation-item">
        <Link to={this.props.to} className="navigation-link">
          <span className="navigation-no">{this.props.number}</span>
          <span className="navigation-line"></span>
          <span className="navigation-name">{this.props.name}</span>
        </Link>
      </li>
    );
  }
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className="navigation-wrap">
        <NavigationItem number="01" name="Home" to="/" />
        <NavigationItem number="02" name="Products" to="/products" />
        <NavigationItem number="03" name="Dictionary" to="/dictionary" />
        <NavigationItem number="04" name="Contact" to="/contact" />
      </ul>
    );
  }
}

module.exports = Navigation;
