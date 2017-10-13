import React from 'react';
import ReactDOM from 'react-dom';

class HomeLogo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="home-image-wrap">
        <img src={require('../../assets/logo.svg')} className="home-image" />
      </div>
    );
  }
}

class HomeTxt extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <h1 className="home-txt">
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
    super(props)
  }

  render() {
    return(
      <div
        className="home-banner-wrap"
        style={{backgroundImage: "url(https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4fb4c867279f3f242bad30c12e91bf9b)"}}></div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-wrap">
        <HomeBanner/>
        <HomeTxt/>
        <HomeLogo/>
      </div>
    );
  }
}

module.exports = Home;
