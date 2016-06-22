'use strict';

import './display.scss'

import React from "react";

export default class Display extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (<div className="display">
      {this.props.children}
    </div>);
  }
}
