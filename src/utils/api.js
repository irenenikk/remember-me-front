let SERVER = '';
if (process.env.NODE_ENV === 'production') {
  SERVER = process.env.REACT_APP_APIURL;
} else {
  SERVER = process.env.REACT_APP_DEV_APIURL;
}

export default class Api {

  getBooks() {
    return new Promise((resolve, reject) => {
      fetch(`${SERVER}/books`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        if (!resp.ok) {
          return reject(resp);
        }
        return resp.json();
      })
      .then(resolve, reject);
    });
  }

  postBook(formState) {
    return new Promise((resolve, reject) => {
      const data = this._createBookFormJSON(formState);
      fetch(`${SERVER}/books`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'omit',
      })
      .then((resp) => {
        if (!resp.ok) {
          return reject(resp);
        }
        return resp.json();
      })
      .then(resolve, reject);
    });
  }

  syncStore(store) {
    this.store = store;
  }

  _createBookFormJSON(bookState) {
    return {
      name: bookState.bookNameInput,
      author: bookState.bookAuthorInput,
    }
  }
}
