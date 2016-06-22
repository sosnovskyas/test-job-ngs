"use strict";

import React from "react";
import ChannelList from "./channelList";

export default React.createClass({
  getInitialState(){
    return {channels: [
      {id: 1, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 2, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 3, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 4, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'}
    ]};
  },
  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels}/>
    </div>)
  }
})
