'use strict';

import "./channelShow.scss";
import React from "react";

export default class ChannelShow extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this._findCurrentChannel();
  }


  render() {
    let channel = this.state;
    return (<div className="channel-show">
      <div className="channel-show__name"><img className="channel-show__image" src={channel.img} alt="channel image"/>{channel.name}</div>
      <div className="channel-show__description">{channel.description}</div>
    </div>);
  }

  componentWillReceiveProps(nextProps) {
    this._findCurrentChannel(nextProps.params.id);
  }


  _findCurrentChannel(id) {
    let channels = JSON.parse(localStorage['channels']);
    let res = channels.find(item => {
      if (item.id == (id || this.props.params.id)) return item;
    });

    this.setState(res);
  }
}
