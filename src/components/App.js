"use strict";

import React from "react";
import serverApi from "./serverApi";
import ChannelList from "./channelList";
import Display from "./display";

export default React.createClass({
  getInitialState(){
    return {channels: []}
  },

  componentWillMount(){
    window.addEventListener('storage', ()=> console.log('CHANGE'));
    this.updateChannels();
  },

  updateChannels() {
    serverApi.getChannels()
      .then(channels => {
        localStorage['channels'] = JSON.stringify(channels);
        this.setState({
          channels: localStorage['channels'] ? JSON.parse(localStorage['channels']) : [],
          currentChannel: localStorage['currentChannel'] ? localStorage['currentChannel'] : 1,
          currentAction: localStorage['currentAction'] ? localStorage['currentAction'] : 'show'
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
