'use strict';
class ServerApi {
  getChannels() {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let channels = [];

      xhr.open('GET', '/api/data', true);

      xhr.onload = function () {
        if (this.status == 200) {
          try {
            channels = JSON.parse(xhr.responseText).channels;
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
}

export default new ServerApi();
