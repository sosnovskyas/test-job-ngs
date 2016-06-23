'use strict';

import "./styles.scss";
import serverApi from "./components/serverApi";
import React from "react";
import {render} from "react-dom";
import {Router, browserHistory} from "react-router";
import routes from "./components/Routes";


serverApi.getChannels()
  .then(result => {
    let channels = '';

    try {
      channels = JSON.stringify(result);
      localStorage['channels'] = channels;
    } catch (err) {
      new Error("Bad data from server: ", err);
    }

    render(
      <Router routes={routes} history={browserHistory}/>,
      document.getElementById('root')
    );

  })
  .catch(err => {
    // alert('Получение списка каналов с сервера произошло с ошибкой: ', err);
    new Error("Bad data from server: ", err);
  });


