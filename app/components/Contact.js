import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PageTitle from './PageTitle';
import {Route, Link} from 'react-router-dom';

class ContactThanks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="contact-thanks">
        <p>THANKS!</p>
        <p>
          <Link to="/">TOPへ戻る</Link>
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
      <div className="contact-kakunin">
        <p>{this.props.contentTitle}</p>
        <p>{this.props.contentText}</p>
        <p>
          <button onClick={this.props.ToForm}>{this.props.labelBack}</button>
          <button onClick={this.props.toThanks}>{this.props.labelSend}</button>
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
        <p>
          <label>
            {this.props.titleLabel}
            <br/><input type="text" value={this.props.contentTitle} onChange={this.props.onFormChange} />
          </label>
        </p>
        <p>
          <label>
            {this.props.textLabel}
            <br/>
            <textarea value={this.props.contentText} onChange={this.props.onFormChange} />
          </label>
        </p>
        <p>
          <input type="submit" value={this.props.checkLabel} />
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
          titleLabel="タイトル"
          textLabel="内容"
          checkLabel="確認"
          contentTitle={this.state.title}
          contentText={this.state.text}
          onFormChange={this.formChange}
          onFormSubmit={this.formSubmit} />;
        break;
      case 1:
        contact = <ContactKakunin
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
          titleLabel="タイトル"
          textLabel="内容"
          checkLabel="確認"
          contentTitle={this.state.title}
          contentText={this.state.text}
          onFormChange={this.formChange}
          onFormSubmit={this.formSubmit} />;
        break;
    }

    return(
      <div className="products-wrap">
        <PageTitle title="CONTACT"/>
        {contact}
      </div>
    );
  }
}

module.exports = Contact;
