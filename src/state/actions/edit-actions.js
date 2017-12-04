import {newMessageAction, updateFailed} from './message-actions';

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

export const FINISH_BOOK_EDIT = 'FINISH_BOOK_EDIT';
export const FINISH_VIDEO_EDIT = 'FINISH_VIDEO_EDIT';
export const FINISH_BLOGPOST_EDIT = 'FINISH_BLOGPOST_EDIT';

export const EDIT_BOOK = 'EDIT_BOOK';
export const EDIT_VIDEO = 'EDIT_VIDEO';
export const EDIT_BLOGPOST = 'EDIT_BLOGPOST';

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

export const updateBookAction = (id) => {
  return async (dispatch, getState, api) => {
    const book = getState().list.books.filter(b => b.id === id)[0];
    api.putBook(book)
      .then(
      () => {
        dispatch(finishEditingBookAction(id));
      },
      (errors) => {
        let message = updateFailed;
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
        let message = updateFailed;
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
        let message = updateFailed;
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

