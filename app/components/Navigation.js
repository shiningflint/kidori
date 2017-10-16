import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Route, Link} from 'react-router-dom';

function NavigationItem(props) {
  return(
    <li className={"navigation-item navigation-item--"+props.number}>
      <Link
        to={props.to}
        className="navigation-link"
        onClick={props.onClick}>
        <span className="navigation-no">{props.number}</span>
        <span className="navigation-line"></span>
        <span className="navigation-name">{props.name}</span>
      </Link>
    </li>
  )
}

function Navigation(props) {
  return(
    <ul className={"navigation-wrap"+(props.spShow ? ' active' : '' )}>
      <NavigationItem number="01" name="Home" to="/" onClick={props.onClick} />
      <NavigationItem number="02" name="Products" to="/products" onClick={props.onClick} />
      <NavigationItem number="03" name="Dictionary" to="/dictionary" onClick={props.onClick} />
      <NavigationItem number="04" name="Contact" to="/contact" onClick={props.onClick} />
    </ul>
  )
}

Navigation.propTypes = {
  spShow: PropTypes.bool,
  onClick: PropTypes.func,
}
NavigationItem.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
}

module.exports = Navigation;
