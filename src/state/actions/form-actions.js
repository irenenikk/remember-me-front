import {newMessageAction, postFailed, postSuccessful} from './message-actions';
import {getBlogpostsAction, getBooksAction, getVideosAction} from './list-actions';

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
