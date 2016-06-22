import React from "react";

import './channelListItem.scss'

export default class ChannelListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let item = this.props.item;
    return <li className="channel-list-item">
      <div className="channel-list-item__left">
        <img src={item.img} alt=""/>
      </div>
      <div className="channel-list-item__right">
        <div>
          {item.name}
        </div>
        <div>
          {item.description}
        </div>
      </div>
    </li>;
  }
}
