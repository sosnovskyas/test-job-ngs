'use strict';

import "./styles.scss";

import React from "react";
import {render} from "react-dom";
import {Router, browserHistory} from "react-router"
import routes from './components/Routes'


render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('root')
);
