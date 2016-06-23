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
      <div className="channel-show__header">
        <div className="channel-show__image-wrapper">
          <img
            className="channel-show__image"
            src={channel.avatar||channel.img}
            alt="channel image"/>
        </div>
        <div>
          <div className="channel-show__name">{channel.name}</div>
          <div className="channel-show__description">{channel.description}</div>
        </div>

        <div className="channel-show__control">
          <input type="button" value="изменить" className="channel-show__control-edit"/>
          <input type="button" value="удалить" className="channel-show__control-delete"/>
        </div>
      </div>

      <div className="channel-show__list">
        {feed.map(item => {
          function getImage() {
            if (item.enclosures.length && item.enclosures[0].type == "image/jpeg") {
              return <div>
                <a href={item.link|| ''} target="_blank">
                  <img src={item.enclosures[0].url} alt=""/>
                </a>
              </div>
            }
          }

          return <div key={item.guid} className="channel-show__list-item">
            {getImage()}
            <div>Автор: {item.author}</div>
            <div>Дата: {item.date}</div>
            <div><a href={item.link|| ''} target="_blank">{item.title}</a></div>
            {/* на всякий случай надо почистить от тегов*/}
            <div>{(item.description || item.summary || '').replace(/<\/?[^>]+>/g, '')}</div>
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
        res.avatar = result.feed.meta['rss:image'].url['#'];

        this.setState(res);
      }
    });
  }
}
