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
      const data = this._createBookFormJSON(formState.book);
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
      const data = this._createBlogpostFormJSON(formState.blogpost);
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
        const data = this._createVideoFormJSON(formState.video);
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

    deleteBook(id) {
      return new Promise((resolve, reject) => {
        fetch(`${SERVER}/books/${id}`, {
          method: 'DELETE',
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

    deleteVideo(id) {
      return new Promise((resolve, reject) => {
        fetch(`${SERVER}/videos/${id}`, {
          method: 'DELETE',
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

    deleteBlogpost(id) {
      return new Promise((resolve, reject) => {
        fetch(`${SERVER}/blogposts/${id}`, {
          method: 'DELETE',
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

    putBook(book) {
      return new Promise((resolve, reject) => {
        const data = this._createBookFormJSON(book)
        fetch(`${SERVER}/books/${book.id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
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

    putVideo(video) {
      return new Promise((resolve, reject) => {
        const data = this._createBookFormJSON(video)
        fetch(`${SERVER}/videos/${video.id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
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

    putBlogpost(blogpost) {
      return new Promise((resolve, reject) => {
        const data = this._createBlogpostFormJSON(blogpost)
        fetch(`${SERVER}/blogposts/${blogpost.id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
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

  syncStore(store) {
    this.store = store;
  }

  _createBookFormJSON(bookState) {
    return {
      title: bookState.title,
      author: bookState.author,
      description: bookState.description,
      comment: bookState.comment,
    }
  }

  _createBlogpostFormJSON(blogpostState) {
    return {
      title: blogpostState.title,
      author: blogpostState.author,
      url: blogpostState.url,
      comment: blogpostState.comment,
    }
  }

  _createVideoFormJSON(videoState) {
    return {
      title: videoState.title,
      url: videoState.url,
      comment: videoState.comment,
    }
  }
}
