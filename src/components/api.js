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

  formSubmit(event, callback) {
    event.preventDefault();

    let url = event.target.url;
    let name = event.target.name;
    let description = event.target.description;
    let err = false;

    if (!name.value) {
      name.classList.add('channel-add__input_error');
      err = true;
    } else {
      name.classList.remove('channel-add__input_error');
      err = false;
    }

    if (!this._testUrl(url.value)) {
      url.classList.add('channel-add__input_error');
      err = true;
    } else {
      url.classList.remove('channel-add__input_error');
      err = false;
    }

    if (err) return;

    callback({
      url: url.value,
      name: name.value,
      description: description.value
    })
  }
  
  _testUrl(url) {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&/=]*)?/gi;
    const regex = new RegExp(expression);
    return !!url.match(regex);
  }
}

export default new Api();
