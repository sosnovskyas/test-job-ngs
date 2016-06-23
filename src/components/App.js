"use strict";

import React from "react";
import serverApi from "./api";
import ChannelList from "./channelList";

// export default React.createClass({
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this._channelsUpdate();
  }

  _channelsUpdate() {
    serverApi.getChannels()
      .then(result => {
        let channels = '';

        try {
          channels = JSON.stringify(result);
          localStorage['channels'] = channels;
        } catch (err) {
          localStorage['channels'] = '[]';
          new Error("Bad data from server: ", err);
        }
      })
      .catch(err => {
        new Error("Bad data from server: ", err);
      });

    this._stateUpdate();
  }

  _stateUpdate() {
    try {
      this.setState({
        channels: JSON.parse(localStorage['channels']),
        currentChannel: localStorage['currentChannel'],
        currentAction: localStorage['currentAction']
      });
    } catch (err) {
      new Error("_stateUpdate: ", err);
    }

  }

  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels} current={this.state.currentChannel}/>
      {this.props.children}
    </div>)
  }


  componentWillReceiveProps() {
    this._stateUpdate();
  }


}
