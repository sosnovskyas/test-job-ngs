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
    return (<div className="channel-show">
      state {this.state.id}
    </div>);
  }

  componentWillReceiveProps(nextProps) {
    this._findCurrentChannel(nextProps.params.id);
  }


  _findCurrentChannel(id) {
    let channels = JSON.parse(localStorage['channels']);
    let res = channels.find(item => {
      if (item.id == (id || this.props.params.id)) return item
    });

    this.setState({
      id: res.id,
      name: res.name

    });
  }
}
