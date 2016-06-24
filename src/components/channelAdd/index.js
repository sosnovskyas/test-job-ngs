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
      <form
        name="add"
        className="channel-add__form">
        <label>
          Название
          <input
            type="text"
            name="name"
            placeholder="Название"
            className="channel-add__input"/>
        </label>
        <label>
          ссылка
          <input
            type="url"
            name="url"
            placeholder="URL"
            className="channel-add__input"/>
        </label>
        <label>
          описание
          <textarea
            name="description"
            placeholder="описание"
            className="channel-add__input"/>
        </label>
        <input
          type="submit"
          value="добавить"/>
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

    let url = event.target.url;
    let name = event.target.name;
    let err = false;

    if (!name.value) {
      name.classList.add('channel-add__input_error');
      err = true;
    } else {
      name.classList.remove('channel-add__input_error');
      err = false;
    }

    if (!this._testUrl(url.value)) {
      url.classList.add('channel-add__input_error');
      err = true;
    } else {
      url.classList.remove('channel-add__input_error');
      err = false;
    }

    if (err) return;

  }
}
