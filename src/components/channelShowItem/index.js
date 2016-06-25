'use strict';

import "./channelShowItem.scss";
import React from "react";

export default class ChannelShowItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    this.setState(this.props.item);
  }

  render() {
    let item = this.state;
    var pubDate = item.date;
    var date = new Date(pubDate);

    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    var resDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()


    return (<div className="channel-show-item">
      <div className="channel-show-item__left">
        <div className="channel-show-item__date">{resDate}</div>
        {this._getImage(item)}
      </div>
      <div className="channel-show-item__right">
        <div className="channel-show-item__title">
          <a
            className="channel-show-item__title-link"
            href={item.link|| ''}
            target="_blank">
            {item.title}
          </a>
        </div>
        <div className="channel-show-item__author">Автор: {item.author}</div>


        {/* на всякий случай надо почистить от тегов*/}
        <div className="channel-show-item__text">
          {(item.description || item.summary || '').replace(/<\/?[^>]+>/g, '')}
        </div>
      </div>
    </div>);
  }

  _getImage(item) {
    if (item.enclosures.length && item.enclosures[0].type == "image/jpeg") {
      return <a className="channel-show-item__image-wrapper" href={item.link|| ''} target="_blank">
        <img className="channel-show-item__image" src={item.enclosures[0].url} alt=""/>
      </a>
    }
  }
}
