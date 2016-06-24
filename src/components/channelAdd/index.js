"use strict";

import "./channelAdd.scss";
import React from "react";

export default class ChannelAdd extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.forms.add
      .addEventListener('submit', event => this._onSubmit(event))
  }

  render() {
    return (<div className="channel-add">
      <div className="channel-add__header">
        Форма добавления нового канала
      </div>
      <form name="add">
        <input type="text" name="name" placeholder="Название"/>
        <input type="url" name="url" placeholder="URL"/>
        <input type="submit" value="добавить"/>
      </form>
    </div>)
  }

  _testUrl(url) {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&/=]*)?/gi;
    const regex = new RegExp(expression);
    return !!url.match(regex);
  }

  _onSubmit(event) {
    event.preventDefault();

    let url = event.target.url.value;
    let name = event.target.name.value;
    let err = false;

    if (!name) {
      event.target.name.classList.add('channel-add__input_error');
      err = true;
    } else {
      event.target.name.classList.remove('channel-add__input_error');
      err = false;
    }

    if (!this._testUrl(url)) {
      event.target.url.classList.add('channel-add__input_error');
      err = true;
    } else {
      event.target.url.classList.remove('channel-add__input_error');
      err = false;
    }

    if(err) return;

    console.log(name, url);
  }
}
