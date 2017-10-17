import React from 'react';
import ReactDOM from 'react-dom';
import PageTitle from './PageTitle';
import PropTypes from 'prop-types';

var bannerURL = "https://ki-do-ri.jp/user_data/packages/default/css/image/dictionary_bg.jpg";
var contentURL = "https://ki-do-ri.jp/user_data/packages/default/css/image/frame.png";
var bookURL = "https://ki-do-ri.jp/user_data/packages/default/css/image/book.svg";

class DictionaryText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImage, 100);
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  setImage() {
    let bgImg = new Image();
    bgImg.src = bannerURL;
    bgImg.onload = this.setActive;
  }

  render() {
    return(
      <div
        className={"dictionary-content"+(this.state.active ? ' active' : '' )}
        style={{backgroundImage: "url("+contentURL+")"}}>
        <h2 className="dictionary-content__h2">
          <span>植物図鑑</span><br/>
          <span className="dictionary-content__h2txt">PLANT DICTIONARY</span>
        </h2>
        <p className="dictionary-content__read">植物の基本知識がわかる図鑑</p>
        <p>
          個性溢れる様々な植物たちの、
          <br/>名前や種類、特徴、栽培方法などをご紹介致します。
        </p>
        <p className="dictionary-content__open">
          <img src={bookURL} className="dictionary-content__book" />
          OPEN A BOOK
        </p>
      </div>
    )
  }
}

class Dictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    setTimeout(this.setImage, 800);
  }

  setActive() {
    this.setState({
      active: true,
    });
  }

  setImage() {
    let bgImg = new Image();
    bgImg.src = bannerURL;
    bgImg.onload = this.setActive;
  }

  render() {
    return(
      <div className="dictionary-pagewrap">
        <div className="dictionary-wrapper">
          <div
            className={"dictionary-pagebg"+(this.state.active ? ' active' : '' )}
            style={{backgroundImage: "url("+bannerURL+")"}}></div>
          <PageTitle title="DICTIONARY"/>
          <DictionaryText />
        </div>
      </div>
    )
  }
}

Dictionary.propTypes = {
  spWidth: PropTypes.number,
}

module.exports = Dictionary;
