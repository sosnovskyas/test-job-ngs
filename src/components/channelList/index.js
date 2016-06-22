"use strict";
import "./channelList.scss";
import React from "react";
import ChannelListItem from "../channelListItem";
import { Link } from 'react-router'

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
    //<ChannelAdd text="" onClick={this.onAdd}/>
    return <div className="channel-list">
      <Link to="/add">add</Link>
      {/*<button className="channel-add" onClick={this.onAdd}>
        <div className="channel-add__plus">+</div>
        Добавить новый канал
      </button>*/}
      <ul className="channel-list__items">
        {this.props.channels.map(item => this.makeItem(item))}
      </ul>
    </div>
  }
}
