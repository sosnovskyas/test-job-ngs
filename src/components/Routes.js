'use strict';
import React from "react";
import App from "./App";
import ChannelShow from "./channelShow";
import ChannelAdd from "./channelAdd";
import ChannelEdit from "./channelEdit";
import NotFound from "./notFound";


function _storageUpdate(id = 1, action = 'show') {
  localStorage['currentChannel'] = id;
  localStorage['currentAction'] = action;
}

export default [{
  path: '/',
  component: App,
  indexRoute: {
    component: ChannelShow,
    onEnter: (nextState, replace) => {
      _storageUpdate();
      replace(`/show/${localStorage['currentChannel']}`)
    }
  },
  childRoutes: [
    {
      path: '/add',
      component: ChannelAdd
    }, {
      path: '/edit/:id',
      component: ChannelEdit,
      onEnter: (nextState, replace) => {
        _storageUpdate(extState.params.id, 'edit');
      }
    }, {
      path: '/show/:id', component: ChannelShow,
      onEnter: (nextState, replace) => {
        _storageUpdate(nextState.params.id, 'show');
      }
    }, {
      path: '*',
      component: NotFound
    }
  ]
}]
