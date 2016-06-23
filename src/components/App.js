"use strict";

import React from "react";
import serverApi from "./serverApi";
import ChannelList from "./channelList";
import Display from "./display";

export default React.createClass({
  getInitialState(){
    return {channels: []}
  },
  
  componentDidMount(){
    this.updateChannels();
  },

  updateChannels() {
    serverApi.getChannels()
      .then(channels => {
        localStorage['channels'] = JSON.stringify(channels);
        this.setState({
          channels: JSON.parse(localStorage['channels']),
          currentChannel: localStorage['currentChannel'] ? localStorage['currentChannel'] : 1
        });

      })
      .catch(err => {
        alert('Получение списка каналов с сервера произошло с ошибкой: ', err);
        this.setState({channels: []});
      });
  },

  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels} current={this.state.currentChannel}/>
      <Display>{this.props.children}</Display>
    </div>)
  }
})
