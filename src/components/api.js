'use strict';
class Api {
  getChannelList() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let channels = [];

      xhr.open('GET', '/api/channels', true);

      xhr.onload = function () {
        if (this.status == 200) {
          try {
            channels = JSON.parse(xhr.responseText);
          } catch (err) {
            reject(new Error('Неверный формат данных на сервере'));
          }
          resolve(channels);

        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network Error"));
      };

      xhr.send();

    })
  }

  setChannelList(data) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let channels = [];

      xhr.open('POST', '/api/channels', true);
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

      xhr.onload = function () {
        if (this.status == 200) {
          try {
            channels = JSON.parse(xhr.responseText);
          } catch (err) {
            reject(new Error('Неверный формат данных на сервере'));
          }
          resolve(channels);

        } else {
          let error = new Error(this.statusText);
          error.code = this.status;
          reject(error);
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network Error"));
      };

      data = JSON.stringify([{
        "id": 14,
        "name": "channel 4",
        "img": "./ch4.jpg",
        "description": "The channel number 4",
        "url": "http://static.feed.rbc.ru/rbc/internal/rss.rbc.ru/rbc.ru/mainnews.rss"
      }]);
      console.log('send', data);
      xhr.send(data);

    })
  }
}

export default new Api();
