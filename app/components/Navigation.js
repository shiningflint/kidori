import React from 'react';
import ReactDOM from 'react-dom';

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className="navigation-item">
        <a href="#" className="navigation-link">
          <span className="navigation-no">{this.props.number}</span>
          <span className="navigation-line"></span>
          <span className="navigation-name">{this.props.name}</span>
        </a>
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
        <NavigationItem number="01" name="Home" />
        <NavigationItem number="02" name="Products" />
        <NavigationItem number="03" name="Dictionary" />
        <NavigationItem number="04" name="Contact" />
      </ul>
    );
  }
}

module.exports = Navigation;
