'use strict';

import "./channelDelete.scss";
import React from "react";
import api from "./../api";
import {browserHistory} from "react-router";

export default class ChannelDelete extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    document.forms.delete
      .addEventListener('click', event => this._onClick(event));
  }

  render() {
    return <div className="channel-delete">
      <form
        name="delete"
        className="channel-delete__form">
        Вы действительно хотите удалить данный канал?
        <input type="submit" name="yes" value="да"/>
        <input type="submit" name="no" value="нет"/>
      </form>
    </div>;
  }

  _onClick(event) {
    event.preventDefault();
    if (event.target.name == 'yes') {
      this._deleteChannel(this.props.params.id)
    }

    if (event.target.name == 'no') {
      browserHistory.push(`/show/${this.props.params.id}`);
    }
  }

  _deleteChannel(id) {
    let channels = JSON.parse(localStorage['channels']);
    let result = [];
    let i = 0;

    channels.map(item => {
      if (id == item.id) return;
      i++;
      item.id = i;
      result.push(item);
    });

    api.setChannelList(result)
      .then(data => {
        localStorage['channels'] = JSON.stringify(data);
        browserHistory.push(`/show/1`)
      });

  }
}
