"use strict";
import "./channelList.scss";
import React from "react";
import ChannelListItem from "../channelListItem";
import {Link} from "react-router";

export default class ChannelList extends React.Component {
  constructor() {
    super();
  }

  makeItem(item, active) {
    return <ChannelListItem item={item} key={item.id} active={active}/>
  }

  onAdd() {
    console.log('add ');
  }

  render() {
    return <div className="channel-list">
      <Link to="/add" className="channel-list__add"><span className="channel-list__add-plus">+</span> Добавить новый
        канал</Link>
      {/*<button className="channel-add" onClick={this.onAdd}>
       <div className="channel-add__plus">+</div>
       Добавить новый канал
       </button>*/}
      <ul className="channel-list__items">
        {this.props.channels.map(item => this.makeItem(item, (this.props.current == item.id)))}
      </ul>
    </div>
  }
}
