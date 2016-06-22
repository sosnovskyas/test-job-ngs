"use strict";

import React from "react";
import ChannelList from "./channelList";

export default React.createClass({
  getInitialState(){
    return {channels: [
      {id: 1, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 2, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 3, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 4, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 5, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 6, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 7, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 8, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 9, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 10, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 11, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 12, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 13, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 14, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 15, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 16, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 17, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 18, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 19, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 20, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 21, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 22, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 23, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 24, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 25, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 26, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 27, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 28, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
      {id: 29, name: 'channel 1', img: './ch1.jpg', description: 'The channel number 1'},
      {id: 30, name: 'channel 2', img: './ch2.jpg', description: 'The channel number 2'},
      {id: 31, name: 'channel 3', img: './ch3.jpg', description: 'The channel number 3'},
      {id: 32, name: 'channel 4', img: './ch4.jpg', description: 'The channel number 4'},
    ]};
  },
  render() {
    return (<div className="app">
      <ChannelList channels={this.state.channels}/>
    </div>)
  }
})
