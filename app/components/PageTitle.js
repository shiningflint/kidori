import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PageTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setActive, 100)
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  render() {
    return(
      <h1 className={"page-title"+(this.state.active ? ' active' : '' )}>
        {this.props.title}
      </h1>
    );
  }
}

PageTitle.propTypes = {
  title: PropTypes.string,
}

module.exports = PageTitle;
