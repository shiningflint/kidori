import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

function SPbtn(props) {
  return(
    <div className="nav-spbtn-wrap">
      <button className={"nav-spbtn"+(props.spShow ? ' active' : '')} onClick={props.onClick}>
        <span className="nav-spbtn-lines"></span>
        <span>{props.spShow ? 'Close' : 'Menu' }</span>
      </button>
    </div>
  );
}

SPbtn.propTypes = {
  onClick: PropTypes.func,
  spShow: PropTypes.bool,
}

module.exports = SPbtn;
