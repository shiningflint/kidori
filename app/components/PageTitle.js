import React from 'react';
import ReactDOM from 'react-dom';


class PageTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h1 className="page-title">{this.props.title}</h1>
    );
  }
}

module.exports = PageTitle;
