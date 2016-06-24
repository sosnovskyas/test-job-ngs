'use strict';

import "./channelEdit.scss";
import React from "react";

export default class ChannelEdit extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div className="channel-edit">
      <div className="channel-edit__header">
        Форма редактирования канала
      </div>
      <form
        name="add"
        className="channel-edit__form">
        <label>
          Название
          <input
            type="text"
            name="name"
            placeholder="Название"
            className="channel-edit__input"/>
        </label>
        <label>
          ссылка
          <input
            type="url"
            name="url"
            placeholder="URL"
            className="channel-edit__input"/>
        </label>
        <label>
          описание
          <textarea
            name="description"
            placeholder="описание"
            className="channel-edit__input"/>
        </label>
        <input
          type="submit"
          value="добавить"/>
      </form>
    </div>;
  }

  _onSubmit(event) {
    api.formSubmit(event, result => this._editChannel(this.props.params.id, result))
  }

  _editChannel(id, value) {

    console.log(id,value);
    /*let channels = JSON.parse(localStorage['channels']);
    let result = [];
    let i = 0;

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
*/
  }
}
