'use strict';
import React from "react";
import App from "./App";
import ChannelShow from "./channelShow";
import ChannelAdd from "./channelAdd";
import ChannelDelete from "./channelDelete";
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
      const route = `/show/${(localStorage['currentChannel'] || 1)}`;
      replace(route)
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
        _storageUpdate(nextState.params.id, 'edit');
      }
    }, {
      path: '/delete/:id',
      component: ChannelDelete,
      onEnter: (nextState, replace) => {
        _storageUpdate(nextState.params.id, 'delete');
      }
    }, {
      path: '/show/:id',
      component: ChannelShow,
      onEnter: (nextState, replace) => {
        if(JSON.parse(localStorage['channels']).length == 0) replace('/add');
        _storageUpdate(nextState.params.id, 'show');
      }
    }, {
      path: '*',
      component: NotFound
    }
  ]
}]
