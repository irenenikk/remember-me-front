export const CLICK = 'CLICK';

export const INPUT_BOOKWRITER_CHANGED = 'INPUT_BOOKWRITER_CHANGED';
export const INPUT_BOOKTITLE_CHANGED = 'INPUT_BOOKTITLE_CHANGED';
export const INPUT_BLOGPOSTTITLE_CHANGED = 'INPUT_BLOGPOSTTITLE_CHANGED';
export const INPUT_BLOGPOSTURL_CHANGED = 'INPUT_BLOGPOSTURL_CHANGED';
export const INPUT_VIDEOTITLE_CHANGED = 'INPUT_VIDEOTITLE_CHANGED';
export const INPUT_VIDEOURL_CHANGED = 'INPUT_VIDEOURL_CHANGED';

export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';
export const BLOGPOSTS_RECEIVED = 'BLOGPOSTS_RECEIVED';
export const VIDEOS_RECEIVED = 'VIDEOS_RECEIVED';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const TIP_SENT = 'TIP_SENT';
export const RESET_MESSAGE = 'RESET_MESSAGE';

export const EDIT_BOOK = 'EDIT_BOOK';
export const EDIT_VIDEO = 'EDIT_VIDEO';
export const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

export const FINISH_BOOK_EDIT = 'FINISH_BOOK_EDIT';

export const UPDATE_BOOK_AUTHOR = 'UPDATE_BOOK_AUTHOR';
export const UPDATE_BOOK_TITLE = 'UPDATE_BOOK_TITLE';
export const UPDATE_BOOK_DESCRIPTION = 'UPDATE_BOOK_DESCRIPTION';

const postSuccessful = 'Tip saved'
const postFailed = 'Couldn\'t save tip';
const getFailed = 'Couldn\'t get tips.'
const deleteFailed = 'Couldn\'t delete tip.'
const updateFailed = 'Couldn\'t update tip.'

export const clickAction = () => {
  return {
    type: CLICK,
  };
}

export const inputBookWriterChangedAction = (input) => {
  return {
    input,
    type: INPUT_BOOKWRITER_CHANGED,
  };
}

export const inputBookTitleChangedAction = (input) => {
  return {
    input,
    type: INPUT_BOOKTITLE_CHANGED,
  };
}

export const inputBookDescriptionChangedAction = (input) => {
  return {
    input,
    type: INPUT_BOOKDESCRIPTION_CHANGED,
  };
}

export const inputBlogpostTitleChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTTITLE_CHANGED,
  };
}

export const inputBlogpostUrlChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTURL_CHANGED,
  };
}

export const inputVideoTitleChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_VIDEOTITLE_CHANGED,
  };
}

export const inputVideoUrlChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_VIDEOURL_CHANGED,
  };
}

export const newMessageAction = (message) => {
  return {
    message,
    type: NEW_MESSAGE,
  }
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

export const resetMessageAction = () => {
  return {
    type: RESET_MESSAGE,
  }
}

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

export const postBookAction = () => {
  return async (dispatch, getState, api) => {
    api.postBook(getState().form)
    .then(
      (response) => {
        dispatch(getBooksAction());
        dispatch(newMessageAction(postSuccessful));
      },
      (error) => {
        dispatch(newMessageAction(postFailed));
      },
    );
  };
}

export const postBlogpostAction = () => {
  return async (dispatch, getState, api) => {
    api.postBlogpost(getState().form)
    .then(
      (response) => {
        dispatch(getBlogpostsAction());
        dispatch(newMessageAction(postSuccessful));
      },
      (error) => {
        dispatch(newMessageAction(postFailed));
      },
    );
  };
}


export const postVideoAction = () => {
  return async (dispatch, getState, api) => {
    api.postVideo(getState().form)
    .then(
      (response) => {
        dispatch(getVideosAction());
        dispatch(newMessageAction(postSuccessful));
      },
      (error) => {
        dispatch(newMessageAction(postFailed));
      },
    );
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
