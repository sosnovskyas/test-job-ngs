'use strict';

import "./channelShow.scss";
import React from "react";

export default class ChannelShow extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    id: '',
    name: '',
    description: '',
    url: ''
  };

  componentWillMount() {
    this._getChannel();
  }


  render() {
    let channel = this.state;
    let feed = [];

    // feednami library fix: first time, answer - undefined
    if (channel.feed) {
      channel.feed.map(item => feed.push(item));
    } else {
      console.log('magic');
    }

    return (<div className="channel-show">
      <div className="channel-show__name"><img className="channel-show__image" src={channel.img}
                                               alt="channel image"/>{channel.name}</div>
      <div className="channel-show__description">{channel.description}</div>
      <div className="channel-show__list">
        {feed.map(item => {
          return <div key={item.guid} className="channel-show__list-item">
            <div>Автор: {item.author}</div>
            <div>Дата: {item.date}</div>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <hr/>
          </div>
        })}
      </div>
    </div>);
  }

  componentWillReceiveProps(nextProps) {
    this._getChannel(nextProps.params.id);
  }

  _getChannel(id) {
    let channels = JSON.parse(localStorage['channels']);
    let res = channels.find(item => {
      if (item.id == (id || this.props.params.id)) return item;
    });

    feednami.load.call(this, res.url, (result)=> {
      if (result.error) {
        console.log(result.error)
      }
      else {
        res.feed = result.feed.entries;
        // console.log(res.feed.map(item => {console.log(item.guid)}));
        this.setState(res);
      }
    });
  }
}
