import getYoutubeId from 'get-youtube-id';
let SERVER = '';
if (process.env.NODE_ENV === 'production') {
  SERVER = process.env.REACT_APP_APIURL;
} else {
  SERVER = process.env.REACT_APP_DEV_APIURL;
}
let KEY = process.env.REACT_APP_YOUTUBE_API;

export default class Api {

  getYoutubeTitle(url) {
    const id = getYoutubeId(url);
    return new Promise((resolve, reject) => {
        fetch(`https://www.googleapis.com/youtube/v3/videos?&id=${id}&key=${KEY}&part=snippet`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((resp) => {
          if (!resp.ok) {
            return resp.json().then(r => reject(r));
          }
          return resp.json().then(r => {
              if(r.items[0] !== undefined) {
                resolve(r.items[0].snippet.title)
              } else {
                resolve('error')
              }
            });
        });
      });
  }

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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
      });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
      });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
      });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
      });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
      });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
      });
    }

    putVideo(video) {
      return new Promise((resolve, reject) => {
        const data = this._createVideoFormJSON(video)
        fetch(`${SERVER}/videos/${video.id}`, {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      .then((resp) => {
        if (!resp.ok) {
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
          return resp.json().then(r => reject(r));
        }
        return resp.json().then(r => resolve(r));
        });
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
      read: bookState.read
    }
  }

  _createBlogpostFormJSON(blogpostState) {
    return {
      title: blogpostState.title,
      author: blogpostState.author,
      url: blogpostState.url,
      comment: blogpostState.comment,
      read: blogpostState.read
    }
  }

  _createVideoFormJSON(videoState) {
    return {
      title: videoState.title,
      url: videoState.url,
      comment: videoState.comment,
      read: videoState.read
    }
  }
}
