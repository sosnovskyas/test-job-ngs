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


  _onSubmit(event) {
    api.formSubmit(event, result => this._addChannel(result))
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
