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
    serverApi.getChannels()
      .then(channels => this.setState({channels: channels}))
      .catch(err => {
        alert('Получение списка каналов с сервера произошло с ошибкой: ', err)
      })
  },

  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels}/>
      <Display>{this.props.children}</Display>
    </div>)
  }
})
