'use strict';

import "./channelEdit.scss";
import React from "react";
import api from "./../api";
import {browserHistory} from "react-router";


export default class ChannelEdit extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    let channel = JSON.parse(localStorage['channels'])[this.props.params.id - 1];
    console.log(channel);
    this.setState(channel);
  }

  componentDidMount() {
    document.forms.edit
      .addEventListener('submit', event => this._onSubmit(event));
  }

  render() {
    let item = this.state;

    return <div className="channel-edit">
      <div className="channel-edit__header">
        Форма редактирования канала
      </div>
      <form
        name="edit"
        className="channel-edit__form">
        <label>
          Название
          <input
            type="text"
            name="name"
            placeholder="Название"
            className="channel-edit__input"
            value={item.name}
            onChange={ event =>this._onChange(event, 'name')}/>
        </label>
        <label>
          ссылка
          <input
            type="url"
            name="url"
            placeholder="URL"
            className="channel-edit__input"
            value={item.url}
            onChange={ event =>this._onChange(event, 'url')}/>
        </label>
        <label>
          описание
          <textarea
            name="description"
            placeholder="описание"
            className="channel-edit__input"
            value={item.description}
            onChange={ event =>this._onChange(event, 'description')}/>
        </label>
        <input
          type="submit"
          value="изменить"/>
      </form>
    </div>
      ;
  }

  _onChange(event, value) {
    this.setState({
      [value]: event.target.value
    });
  }

  _onSubmit(event) {
    api.formSubmit(event, result => this._editChannel(this.props.params.id, result))
  }

  _editChannel(id, value) {
    let channels = JSON.parse(localStorage['channels']);
    let result = [];
    let i = 0;

    channels.map(item => {
      if (item.id == (this.props.params.id)) item = value;
      i++;
      item.id = i;
      result.push(item);
    });

    api.setChannelList(result)
      .then(data => {
        localStorage['channels'] = JSON.stringify(data);
        browserHistory.push(`/show/${id}`)
      });

  }
}
