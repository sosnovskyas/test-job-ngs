"use strict";

import "./channelAdd.scss";
import React from "react";
import {browserHistory} from "react-router";
import api from "./../api";

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
    let description = event.target.description;
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

    this._addChannel({
      name: name.value,
      description: description.value,
      url: url.value
    })
  }

  _addChannel(newChannel) {
    let channels = JSON.parse(localStorage['channels']);
    let result = [];
    let i = 0;

    newChannel.id = ++i;
    result.push(newChannel);

    channels.map(item => {
      i++;
      item.id = i;
      result.push(item);
    });

    api.setChannelList(result)
      .then(data => {
        localStorage['channels'] = JSON.stringify(data);
        browserHistory.push(`/show/${newChannel.id}`)
      });

  }
}
