export const CLICK = 'CLICK';

export const INPUT_BOOKWRITER_CHANGED = 'INPUT_BOOKWRITER_CHANGED';
export const INPUT_BOOKDESCRIPTION_CHANGED = 'INPUT_BOOKDESCRIPTION_CHANGED';
export const INPUT_BOOKTITLE_CHANGED = 'INPUT_BOOKTITLE_CHANGED';
export const INPUT_BOOKCOMMENT_CHANGED = 'INPUT_BOOKCOMMENT_CHANGED';
export const INPUT_BLOGPOSTTITLE_CHANGED = 'INPUT_BLOGPOSTTITLE_CHANGED';
export const INPUT_BLOGPOSTAUTHOR_CHANGED = 'INPUT_BLOGPOSTAUTHOR_CHANGED';
export const INPUT_BLOGPOSTURL_CHANGED = 'INPUT_BLOGPOSTURL_CHANGED';
export const INPUT_BLOGPOSTCOMMENT_CHANGED = 'INPUT_BLOGPOSTCOMMENT_CHANGED';
export const INPUT_VIDEOTITLE_CHANGED = 'INPUT_VIDEOTITLE_CHANGED';
export const INPUT_VIDEOURL_CHANGED = 'INPUT_VIDEOURL_CHANGED';
export const INPUT_VIDEOCOMMENT_CHANGED = 'INPUT_VIDEOCOMMENT_CHANGED';

export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';
export const BLOGPOSTS_RECEIVED = 'BLOGPOSTS_RECEIVED';
export const VIDEOS_RECEIVED = 'VIDEOS_RECEIVED';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const TIP_SENT = 'TIP_SENT';
export const RESET_MESSAGE = 'RESET_MESSAGE';

export const EDIT_BOOK = 'EDIT_BOOK';
export const EDIT_VIDEO = 'EDIT_VIDEO';
export const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

export const DONE_BOOK = 'DONE_BOOK';
export const DONE_VIDEO = 'DONE_VIDEO';
export const DONE_BLOGPOST = 'DONE_BLOGPOST';

export const FINISH_BOOK_EDIT = 'FINISH_BOOK_EDIT';
export const FINISH_VIDEO_EDIT = 'FINISH_VIDEO_EDIT';
export const FINISH_BLOGPOST_EDIT = 'FINISH_BLOGPOST_EDIT';

export const UPDATE_BOOK_AUTHOR = 'UPDATE_BOOK_AUTHOR';
export const UPDATE_BOOK_TITLE = 'UPDATE_BOOK_TITLE';
export const UPDATE_BOOK_DESCRIPTION = 'UPDATE_BOOK_DESCRIPTION';
export const UPDATE_BOOK_COMMENT = 'UPDATE_BOOK_COMMENT';

export const UPDATE_VIDEO_TITLE = 'UPDATE_VIDEO_TITLE';
export const UPDATE_VIDEO_URL = 'UPDATE_VIDEO_URL';
export const UPDATE_VIDEO_COMMENT = 'UPDATE_VIDEO_COMMENT';

export const UPDATE_BLOGPOST_TITLE = 'UPDATE_BLOGPOST_TITLE';
export const UPDATE_BLOGPOST_AUTHOR = 'UPDATE_BLOGPOST_AUTHOR';
export const UPDATE_BLOGPOST_URL = 'UPDATE_BLOGPOST_URL';
export const UPDATE_BLOGPOST_COMMENT = 'UPDATE_BLOGPOST_COMMENT';

const postSuccessful = 'Tip saved'
const postFailed = 'Couldn\'t save tip';
const getFailed = 'Couldn\'t get tips.'
const deleteFailed = 'Couldn\'t delete tip.'

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

export const inputBookCommentChangedAction = (input) => {
  return {
    input,
    type: INPUT_BOOKCOMMENT_CHANGED,
  };
}

export const inputBlogpostTitleChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTTITLE_CHANGED,
  };
}

export const inputBlogpostAuthorChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTAUTHOR_CHANGED,
  };
}

export const inputBlogpostUrlChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTURL_CHANGED,
  };
}

export const inputBlogpostCommentChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_BLOGPOSTCOMMENT_CHANGED,
  }
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

export const inputVideoCommentChangedAction = (input) => {
  return {
    input: input,
    type: INPUT_VIDEOCOMMENT_CHANGED,
  }
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
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
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
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
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
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
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
        dispatch(newMessageAction(getFailed));
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
        dispatch(newMessageAction(getFailed));
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
        dispatch(newMessageAction(getFailed));
      },
    );
  };
}

export const editBookAction = (id) => {
  return {
    id,
    type: EDIT_BOOK,
  };
}

export const editVideoAction = (id) => {
  return {
    id,
    type: EDIT_VIDEO,
  };
}

export const editBlogpostAction = (id) => {
  return {
    id,
    type: EDIT_BLOGPOST,
  };
}

export const finishEditingBookAction = (id) => {
  return {
    id,
    type: FINISH_BOOK_EDIT,
  }
}

export const finishEditingVideoAction = (id) => {
  return {
    id,
    type: FINISH_VIDEO_EDIT,
  }
}

export const finishEditingBlogpostAction = (id) => {
  return {
    id,
    type: FINISH_BLOGPOST_EDIT,
  }
}

export const updateBookAction = (id) => {
  return async (dispatch, getState, api) => {
    const book = getState().list.books.filter(b => b.id === id)[0];
    api.putBook(book)
      .then(
      () => {
        dispatch(finishEditingBookAction(id));
      },
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
      },
    );
  };
}

export const updateVideoAction = (id) => {
  return async (dispatch, getState, api) => {
    const video = getState().list.videos.filter(v => v.id === id)[0];
    api.putVideo(video)
      .then(
      () => {
        dispatch(finishEditingVideoAction(id));
      },
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
      },
    );
  };
}

export const updateBlogpostAction = (id) => {
  return async (dispatch, getState, api) => {
    const post = getState().list.blogposts.filter(b => b.id === id)[0];
    api.putBlogpost(post)
      .then(
      () => {
        dispatch(finishEditingBlogpostAction(id));
      },
      (errors) => {
        let message = postFailed;
        if (errors instanceof Array && errors[0].message) {
          message = errors[0].message;
          errors.forEach((e, i) => {
            if (i > 0) {
              message += '\n' + e.message
            }
          });
        }
        dispatch(newMessageAction(message));
      },
    );
  };
}

export const updateBookAuthorAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BOOK_AUTHOR,
  };
}

export const updateBookTitleAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BOOK_TITLE,
  };
}

export const updateBookDescriptionAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BOOK_DESCRIPTION,
  };
}

export const updateBookCommentAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BOOK_COMMENT,
  };
}

export const updateVideoTitleAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_VIDEO_TITLE,
  };
}

export const updateVideoUrlAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_VIDEO_URL,
  };
}

export const updateVideoCommentAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_VIDEO_COMMENT,
  };
}

export const updateBlogpostTitleAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BLOGPOST_TITLE,
  };
}

export const updateBlogpostAuthorAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BLOGPOST_AUTHOR,
  };
}

export const updateBlogpostUrlAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BLOGPOST_URL,
  };
}

export const updateBlogpostCommentAction = (input, id) => {
  return {
    input,
    id,
    type: UPDATE_BLOGPOST_COMMENT,
  };
}
