"use strict";

import './channelAdd.scss'

import React from "react";

export default class ChannelAdd extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<button className="channel-add" onClick={this.props.onClick}>
      <div className="channel-add__plus">+</div>
      {this.props.text}
    </button>)
  }
}
