'use strict';
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './App'
import ChannelShow from './channelShow'
import ChannelAdd from './channelAdd'
import ChannelEdit from './channelEdit'
import NotFound from './notFound'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ChannelShow}/>
    <Route path="/add" component={ChannelAdd} />
    <Route path="/edit/:id" component={ChannelEdit} />
    <Route path="*" component={NotFound}/>
  </Route>
);
