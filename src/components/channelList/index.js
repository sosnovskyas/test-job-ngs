"use strict";
import "./channelList.scss";
import React from "react";
import ChannelListItem from "../channelListItem";
import ChannelAdd from "../channelAdd";

export default class ChannelList extends React.Component {
  constructor() {
    super();
  }

  makeItem(item) {
    return <ChannelListItem item={item} key={item.id}/>
  }

  onAdd() {
    console.log('add ');
  }

  render() {

    return <div className="channel-list__wrapper">
      <ChannelAdd text="Добавить новый канал" onClick={this.onAdd}/>
      <ul className="channel-list">
        {this.props.channels.map(item => this.makeItem(item))}
      </ul>
    </div>
  }
}
