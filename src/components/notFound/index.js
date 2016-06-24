"use strict";

import "./notFound.scss";
import React from "react";

export default class NotFound extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div className="not-found">404 - Not found</div>)
  }
}
