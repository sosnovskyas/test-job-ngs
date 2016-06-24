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
      xhr.send(JSON.stringify(data));

    })
  }
}

export default new Api();