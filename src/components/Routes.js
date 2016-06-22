'use strict';
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ChannelShow from './channelShow'
import ChannelAdd from './channelAdd'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChannelShow}/>
    <Route path="/add" component={ChannelAdd} />
  </Route>
);
