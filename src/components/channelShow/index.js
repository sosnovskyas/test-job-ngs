'use strict';

import "./channelShow.scss";
import React from "react";

export default class ChannelShow extends React.Component {
  
  constructor(props) {
    super(props);

  }

  render() {
    return (<div className="channel-show">
      show {this.props.params.id}
    </div>);
  }
}
