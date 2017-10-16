import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className={"navigation-item navigation-item--"+this.props.number}>
        <Link
          to={this.props.to}
          className="navigation-link"
          onClick={this.props.onClick}>
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
      <ul className={"navigation-wrap"+(this.props.spShow ? ' active' : '' )}>
        <NavigationItem number="01" name="Home" to="/" onClick={this.props.onClick} />
        <NavigationItem number="02" name="Products" to="/products" onClick={this.props.onClick} />
        <NavigationItem number="03" name="Dictionary" to="/dictionary" onClick={this.props.onClick} />
        <NavigationItem number="04" name="Contact" to="/contact" onClick={this.props.onClick} />
      </ul>
    );
  }
}

module.exports = Navigation;
