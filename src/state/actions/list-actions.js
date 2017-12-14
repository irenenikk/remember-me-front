import {newMessageAction, getFailed, deleteFailed, updateFailed} from './message-actions';

export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';
export const BLOGPOSTS_RECEIVED = 'BLOGPOSTS_RECEIVED';
export const VIDEOS_RECEIVED = 'VIDEOS_RECEIVED';
export const ALL_TIPS_RECEIVED = 'ALL_TIPS_RECEIVED';

export const DONE_BOOK = 'DONE_BOOK';
export const DONE_VIDEO = 'DONE_VIDEO';
export const DONE_BLOGPOST = 'DONE_BLOGPOST';

export const FILTER_SHOW_ALL = 'FILTER_SHOW_ALL';
export const FILTER_READ = 'FILTER_READ';
export const FILTER_UNREAD = 'FILTER_UNREAD';

export const CHANGE_SEARCH_STRING = 'CHANGE_SEARCH_STRING';

export const getBooksAction = () => {
  return async (dispatch, getState, api) => {
    api.getBooks()
      .then(
      (response) => {
        dispatch(booksReceivedAction(response));
      }
      , () => {
        dispatch(newMessageAction(getFailed));
      })
  };
}

export const getBlogpostsAction = () => {
  return async (dispatch, getState, api) => {
    api.getBlogposts()
      .then(
      (response) => {
        dispatch(blogpostsReceivedAction(response));
      }
      , () => {
        dispatch(newMessageAction(getFailed));
      })
  };
}

export const getVideosAction = () => {
  return async (dispatch, getState, api) => {
    api.getVideos()
      .then(
      (response) => {
        dispatch(videosReceivedAction(response));
      }
      , () => {
        dispatch(newMessageAction(getFailed));
      })
  };
}

export const deleteBookAction = (id) => {
  return async (dispatch, getState, api) => {
    api.deleteBook(id)
      .then(
      () => {
        dispatch(getBooksAction());
      },
      (error) => {
        dispatch(newMessageAction(deleteFailed));
      },
    );
  };
}

export const deleteVideoAction = (id) => {
  return async (dispatch, getState, api) => {
    api.deleteVideo(id)
      .then(
      () => {
        dispatch(getVideosAction());
      },
      (error) => {
        dispatch(newMessageAction(deleteFailed));
      },
    );
  };
}


export const deleteBlogpostAction = (id) => {
  return async (dispatch, getState, api) => {
    api.deleteBlogpost(id)
      .then(
      () => {
        dispatch(getBlogpostsAction());
      },
      (error) => {
        dispatch(newMessageAction(deleteFailed));
      },
    );
  };
}

export const doneBookAction = (id) => {
  return async (dispatch, getState, api) => {
    const book = getState().list.books.filter(b => b.id === id)[0];
    if(book.read) book.read = false;
    else book.read = true;
    api.putBook(book)
      .then(
      () => {
        dispatch(getBooksAction());
      },
      (error) => {
        dispatch(newMessageAction(updateFailed));
      },
    );
  };
}

export const doneVideoAction = (id) => {
  return async (dispatch, getState, api) => {
    const video = getState().list.videos.filter(v => v.id === id)[0];
    if(video.read) video.read = false;
    else video.read = true;
    api.putVideo(video)
      .then(
      () => {
        dispatch(getVideosAction());
      },
      (error) => {
        dispatch(newMessageAction(updateFailed));
      },
    );
  };
}

export const doneBlogpostAction = (id) => {
  return async (dispatch, getState, api) => {
    const post = getState().list.blogposts.filter(b => b.id === id)[0];
    if(post.read) post.read = false;
    else post.read = true;
    api.putBlogpost(post)
      .then(
      () => {
        dispatch(getBlogpostsAction());
      },
      (error) => {
        dispatch(newMessageAction(updateFailed));
      },
    );
  };
}


export const booksReceivedAction = (books) => {
  return {
    books,
    type: BOOKS_RECEIVED,
  }
}

export const blogpostsReceivedAction = (blogposts) => {
  return {
    blogposts,
    type: BLOGPOSTS_RECEIVED,
  }
}

export const videosReceivedAction = (videos) => {
  return {
    videos,
    type: VIDEOS_RECEIVED,
  }
}

export const filterShowAllAction = () => {
  return {
    type: FILTER_SHOW_ALL,
  }
}

export const filterReadAction = () => {
  return {
    type: FILTER_READ,
  }
}

export const filterUnreadAction = () => {
  return {
    type: FILTER_UNREAD,
  }
}

export const changeSearchStringAction =(input) => {
  return {
    searchString: input,
    type: CHANGE_SEARCH_STRING,
  }
}
