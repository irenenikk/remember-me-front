import {newMessageAction, postFailed, postSuccessful} from './message-actions';
import {getBlogpostsAction, getBooksAction, getVideosAction} from './list-actions';

export const BOOK_WRITER_CHANGED = 'BOOKWRITER_CHANGED';
export const BOOK_DESCRIPTION_CHANGED = 'BOOKDESCRIPTION_CHANGED';
export const BOOK_TITLE_CHANGED = 'BOOKTITLE_CHANGED';
export const BOOK_COMMENT_CHANGED = 'BOOKCOMMENT_CHANGED';

export const BLOGPOST_TITLE_CHANGED = 'BLOGPOSTTITLE_CHANGED';
export const BLOGPOST_AUTHOR_CHANGED = 'BLOGPOSTAUTHOR_CHANGED';
export const BLOGPOST_URL_CHANGED = 'BLOGPOSTURL_CHANGED';
export const BLOGPOST_COMMENT_CHANGED = 'BLOGPOSTCOMMENT_CHANGED';

export const VIDEO_TITLE_CHANGED = 'VIDEOTITLE_CHANGED';
export const VIDEO_URL_CHANGED = 'VIDEOURL_CHANGED';
export const VIDEO_COMMENT_CHANGED = 'VIDEOCOMMENT_CHANGED';

export const inputBookWriterChangedAction = (input) => {
  return {
    input,
    type: BOOK_WRITER_CHANGED,
  };
}

export const inputBookTitleChangedAction = (input) => {
  return {
    input,
    type: BOOK_TITLE_CHANGED,
  };
}

export const inputBookDescriptionChangedAction = (input) => {
  return {
    input,
    type: BOOK_DESCRIPTION_CHANGED,
  };
}

export const inputBookCommentChangedAction = (input) => {
  return {
    input,
    type: BOOK_COMMENT_CHANGED,
  };
}

export const inputBlogpostTitleChangedAction = (input) => {
  return {
    input: input,
    type: BLOGPOST_TITLE_CHANGED,
  };
}

export const inputBlogpostAuthorChangedAction = (input) => {
  return {
    input: input,
    type: BLOGPOST_AUTHOR_CHANGED,
  };
}

export const inputBlogpostUrlChangedAction = (input) => {
  return {
    input: input,
    type: BLOGPOST_URL_CHANGED,
  };
}

export const inputBlogpostCommentChangedAction = (input) => {
  return {
    input: input,
    type: BLOGPOST_COMMENT_CHANGED,
  }
}

export const inputVideoTitleChangedAction = (input) => {
  return {
    input: input,
    type: VIDEO_TITLE_CHANGED,
  };
}

export const inputVideoUrlChangedAction = (input) => {
  return {
    input: input,
    type: VIDEO_URL_CHANGED,
  };
}

export const inputVideoCommentChangedAction = (input) => {
  return {
    input: input,
    type: VIDEO_COMMENT_CHANGED,
  }
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
    if(getState().form.video.title === '') {
      api.getYoutubeTitle(getState().form.video.url).then(
        (response) => {
          if(response === 'error'){
            normalPost(dispatch, getState, api)
          } else {
            dispatch(inputVideoTitleChangedAction(response));
          }
        })
    } else {
      normalPost(dispatch, getState, api);
    }
  };

  function normalPost(dispatch, getState, api) {
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
        });
  }
}