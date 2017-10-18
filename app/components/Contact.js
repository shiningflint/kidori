import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import {ButtonPress, ButtonRelease} from '../helpers/Button.js';
import {Route, Link} from 'react-router-dom';

const titleLabel = "タイトル";
const textLabel = "内容";
const checkBtnLabel = "確認";

class ContactThanks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact-content">
        <p className="contact-content__title">THANKS!</p>
        <p>
          <Link
            to="/"
            className="contact-btn"
            onMouseDown={ButtonPress}
            onMouseUp={ButtonRelease}
            onMouseLeave={ButtonRelease}
            onTouchStart={ButtonPress}
            onTouchEnd={ButtonRelease}>TOPへ戻る</Link>
        </p>
      </div>
    );
  }
}

class ContactKakunin extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact-content">
        <p className="contact-content__title">お問い合わせ確認</p>
        <p className="contact-kakunin__item contact-kakunin__item--fade">
          <span className="contact-kakunin__label">{this.props.titleLabel}</span>
          {this.props.contentTitle}
        </p>
        <hr className="contact-kakunin__hr"/>
        <p className="contact-kakunin__item contact-kakunin__item--fade">
          <span className="contact-kakunin__label">{this.props.textLabel}</span>
          {this.props.contentText}
        </p>
        <p className="contact-kakunin__item">この内容で良かったら送信してください。</p>
        <p>
          <button
            onClick={this.props.ToForm}
            onMouseDown={ButtonPress}
            onMouseUp={ButtonRelease}
            onMouseLeave={ButtonRelease}
            onTouchStart={ButtonPress}
            onTouchEnd={ButtonRelease}
            className="contact-btn mr1">
            {this.props.labelBack}
          </button>
          <button
            onClick={this.props.toThanks}
            onMouseDown={ButtonPress}
            onMouseUp={ButtonRelease}
            onMouseLeave={ButtonRelease}
            onTouchStart={ButtonPress}
            onTouchEnd={ButtonRelease}
            className="contact-btn">
            {this.props.labelSend}
          </button>
        </p>
      </div>
    );
  }
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <form className="contact-form" onSubmit={this.props.onFormSubmit}>
        <p className="contact-item">
          <label>
            <span className="contact-label">{this.props.titleLabel}</span>
            <input
              type="text"
              value={this.props.contentTitle}
              onChange={this.props.onFormChange}
              className="contact-input" />
          </label>
        </p>
        <p className="contact-item">
          <label>
            <span className="contact-label contact-label--textarea">
              {this.props.textLabel}
            </span>
            <textarea
              value={this.props.contentText}
              onChange={this.props.onFormChange}
              className="contact-textarea" />
          </label>
        </p>
        <p className="mt1">
          <input
            type="submit"
            value={this.props.checkLabel}
            className="contact-btn"
            onMouseDown={ButtonPress}
            onMouseUp={ButtonRelease}
            onMouseLeave={ButtonRelease}
            onTouchStart={ButtonPress}
            onTouchEnd={ButtonRelease} />
        </p>
      </form>
    );
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kakunin: 0,
      title: "",
      text: "",
    };
    this.formChange = this.formChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
    this.toForm = this.toForm.bind(this);
    this.toThanks = this.toThanks.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth <= this.props.spWidth) {
      window.scrollTo(0,0);
    }
  }

  formChange(e) {
    (e.target.tagName === "INPUT" ? this.updateTitle(e.target.value) : this.updateText(e.target.value) )
  }

  formSubmit(e) {
    e.preventDefault();
    this.setState({
      kakunin: 1,
    });
  }

  toForm() {
    this.setState({
      kakunin: 0,
    });
  }

  toThanks() {
    this.setState({
      kakunin: 2,
    });
  }

  updateTitle(value) {
    let validatedTitle = (x) => {
      return x.match(/[^0-9０-９]*/);
    }
    this.setState({
      title: validatedTitle(value),
    });
  }

  updateText(value) {
    this.setState({
      text: value,
    });
  }

  render() {
    let contact = null;
    switch (this.state.kakunin) {
      case 0:
        contact = <ContactForm
          titleLabel={titleLabel}
          textLabel={textLabel}
          checkLabel={checkBtnLabel}
          contentTitle={this.state.title}
          contentText={this.state.text}
          onFormChange={this.formChange}
          onFormSubmit={this.formSubmit} />;
        break;
      case 1:
        contact = <ContactKakunin
          titleLabel={titleLabel}
          textLabel={textLabel}
          contentTitle={this.state.title}
          contentText={this.state.text}
          labelBack={"戻る"}
          labelSend={"送信"}
          ToForm={this.toForm}
          toThanks={this.toThanks} />;
        break;
      case 2:
        contact = <ContactThanks />
        break;
      default:
        contact = <ContactForm
          titleLabel={titleLabel}
          textLabel={textLabel}
          checkLabel={checkBtnLabel}
          contentTitle={this.state.title}
          contentText={this.state.text}
          onFormChange={this.formChange}
          onFormSubmit={this.formSubmit} />;
        break;
    }

    return(
      <div className="products-wrap">
        <PageTitle title="CONTACT"/>
        <div className="contact-form-contentwrap">
          <div className="contact-form-contentwrap__inner">
            {contact}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Contact;
