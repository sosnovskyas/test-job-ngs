'use strict';
import React from "react";
import App from "./App";
import ChannelShow from "./channelShow";
import ChannelAdd from "./channelAdd";
import ChannelEdit from "./channelEdit";
import NotFound from "./notFound";

/*
 export default (
 <Route path="/" component={App}>
 <IndexRoute component={ChannelShow}/>
 <Route path="/add" component={ChannelAdd} />
 <Route path="/edit/:id" component={ChannelEdit} />
 <Route path="*" component={NotFound}/>
 </Route>
 );
 */

export default [{
  path: '/',
  component: App,
  indexRoute: {
    component: ChannelShow,
    onEnter: (nextState, replace) => replace(`/show/${localStorage['currentChannel']}`)
  },
  childRoutes: [
    {path: '/add', component: ChannelAdd},
    {
      path: '/edit/:id',
      component: ChannelEdit,
      onEnter: (nextState, replace) => {
        localStorage['currentChannel'] = nextState.params.id;
        localStorage['currentAction'] = 'edit';
      }
    },
    {
      path: '/show/:id', component: ChannelShow,
      onEnter: (nextState, replace) => {
        localStorage['currentChannel'] = nextState.params.id;
        localStorage['currentAction'] = 'show';
      }
    },
    {path: '*', component: NotFound}
  ]
}]
