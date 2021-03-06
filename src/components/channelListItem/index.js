import React from "react";
import "./channelListItem.scss";
import {Link} from "react-router";

export default class ChannelListItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    let item = this.props.item;
    let active = this.props.active ? 'channel-list-item_active' : '';
    return <li className={"channel-list-item " + active}>
      <Link className="channel-list-item__link" to={"/show/"+item.id}>
        <div className="channel-list-item__left">
          <img
            className="channel-list-item__left-image"
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/30x-Radio-Tower.png"
            alt="channel image"/>
        </div>
        <div className="channel-list-item__right">
          <div>
            {(item.name || 'RSS channel')}
          </div>
          <div>
            {(item.description || '')}
          </div>
        </div>
      </Link>
    </li>;
  }
}
