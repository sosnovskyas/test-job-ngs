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

    return <ul className="channel-list">
      <ChannelAdd text="Добавить новый канал" onClick={this.onAdd}/>
      {this.props.channels.map(item => this.makeItem(item))}
    </ul>
  }
}
