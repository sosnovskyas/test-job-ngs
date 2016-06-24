'use strict';

import "./channelShow.scss";
import React from "react";
import { browserHistory } from 'react-router'

import ChannelShowItem from './../channelShowItem'

import api from './../api'

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
      <div className="channel-show__header">
        <div className="channel-show__image-wrapper">
          <img
            className="channel-show__image"
            src={channel.avatar||channel.img||''}
            alt="channel image"/>
        </div>
        <div>
          <div className="channel-show__name">{(channel.name || 'RSS channel')}</div>
          <div className="channel-show__description">{(channel.description || 'empty description')}</div>
        </div>

        <div className="channel-show__control">
          <input type="button" value="изменить" className="channel-show__control-edit" onClick={api.setChannelList}/>
          <input type="button" value="удалить" className="channel-show__control-delete"/>
        </div>
      </div>

      <div className="channel-show__list">
        {feed.map(item => {
          return <ChannelShowItem item={item} key={item.guid} />
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

    if(!res){
      res = channels[0];
      localStorage['currentChannel'] = channels[0].id;
      browserHistory.push(`/${localStorage['currentAction']}/${localStorage['currentChannel']}`)
    }

    feednami.load.call(this, res.url, (result)=> {
      if (result.error) {
        console.log(result.error);
        alert(`${result.error.code}: ${result.error.message}`);
        res.feed = [];
        res.avatar = '';

        this.setState(res);
      }
      else {
        res.feed = result.feed.entries;
        res.avatar = result.feed.meta['rss:image'].url['#'];

        this.setState(res);
      }
    });
  }
}
