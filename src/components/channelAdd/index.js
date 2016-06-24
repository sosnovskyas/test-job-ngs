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
        <input type="text" name="name" placeholder="Название" required/>
        <input type="url" name="url" placeholder="URL" required/>
        <input type="submit" value="добавить"/>
      </form>
    </div>)
  }

  _onSubmit(event) {
    event.preventDefault();

    let url = event.target.url.value;
    let name = event.target.name.value;

    console.log(name, url);

  }
}
