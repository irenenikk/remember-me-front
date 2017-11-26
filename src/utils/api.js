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

  getBlogposts() {
    return new Promise((resolve, reject) => {
      fetch(`${SERVER}/blogposts`, {
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


  getVideos() {
    return new Promise((resolve, reject) => {
      fetch(`${SERVER}/videos`, {
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

  postBlogpost(formState) {
    return new Promise((resolve, reject) => {
      const data = this._createBlogpostFormJSON(formState);
      fetch(`${SERVER}/blogposts`, {
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


    postVideo(formState) {
      return new Promise((resolve, reject) => {
        const data = this._createVideoFormJSON(formState);
        fetch(`${SERVER}/videos`, {
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

  _createBlogpostFormJSON(blogpostState) {
    return {
      title: blogpostState.blogpostTitleInput,
      url: blogpostState.blogpostUrlInput,
    }
  }

  _createVideoFormJSON(videoState) {
    return {
      title: videoState.videoTitleInput,
      url: videoState.videoUrlInput,
    }
  }


}
