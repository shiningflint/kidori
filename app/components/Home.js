import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var bannerURL = "https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4fb4c867279f3f242bad30c12e91bf9b";

class HomeLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImage, this.props.timeout);
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  setImage() {
    let bgImg = new Image();
    bgImg.src = this.props.url;
    bgImg.onload = this.setActive;
  }

  render() {
    return(
      <div className={"home-image-wrap"+(this.state.active ? ' active' : '' )}>
        <img src={this.props.url} className="home-image" />
      </div>
    );
  }
}

class HomeTxt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setActive, this.props.timeout)
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  render() {
    return(
      <h1 className={"home-txt"+(this.state.active ? ' active' : '' )}>
        植物と暮らそう
        <br/>小さな自然と四季を見つめながら
        <br/>何気ない日常を 心地よく 豊かに
        <br/>緑で、気取りを。
      </h1>
    );
  }
}

class HomeBanner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImage, this.props.timeout);
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  setImage() {
    let bgImg = new Image();
    bgImg.src = this.props.url;
    bgImg.onload = this.setActive;
  }

  render() {
    return(
      <div
        className={"home-banner-wrap"+(this.state.active ? ' active' : '' )}
        style={{backgroundImage: "url("+this.props.url+")"}}></div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.innerWidth <= this.props.spWidth) {
      window.scrollTo(0,0);
    }
  }

  render() {
    return(
      <div className="home-wrap">
        <HomeBanner timeout={700} url={bannerURL} />
        <HomeTxt timeout={500} />
        <HomeLogo timeout={300} url={require('../../assets/logo.svg')} />
      </div>
    );
  }
}

Home.propTypes = {
  spWidth: PropTypes.number
}
HomeBanner.propTypes = {
  timeout: PropTypes.number,
  url: PropTypes.string
}
HomeTxt.propTypes = {
  timeout: PropTypes.number
}
HomeLogo.propTypes = {
  timeout: PropTypes.number,
  url: PropTypes.string,
}

module.exports = Home;
