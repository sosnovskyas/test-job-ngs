"use strict";

import React from "react";
import serverApi from "./serverApi";
import ChannelList from "./channelList";
import Display from "./display";

export default React.createClass({
  componentWillReceiveProps(nextProps){
    this._stateUpdate();
  },

  getInitialState(){
    return {channels: []}
  },

  componentWillMount(){
    this._channelsUpdate();
  },

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
        // alert('Получение списка каналов с сервера произошло с ошибкой: ', err);
        new Error("Bad data from server: ", err);
      });

    this._stateUpdate();
  },

  _stateUpdate() {
    try {
      this.setState({
        channels: JSON.parse(localStorage['channels']),
        currentChannel: localStorage['currentChannel'],
        currentAction: localStorage['currentAction']
      });
    } catch(err) {
      new Error("_stateUpdate: ", err);
    }

  },

  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels} current={this.state.currentChannel}/>
      <Display>{this.props.children}</Display>
    </div>)
  }
})
