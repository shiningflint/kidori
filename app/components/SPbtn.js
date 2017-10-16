import React from 'react';
import ReactDOM from 'react-dom';

class SPbtn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="nav-spbtn-wrap">
        <button className={"nav-spbtn"+(this.props.spShow ? ' active' : '')} onClick={this.props.onClick}>
          <span className="nav-spbtn-lines"></span>
          <span>{this.props.spShow ? 'Close' : 'Menu' }</span>
        </button>
      </div>
    );
  }
}

module.exports = SPbtn;
