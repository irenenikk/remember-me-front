export const CLICK = 'CLICK';

export const INPUT_BOOKWRITER_CHANGED = 'INPUT_BOOKWRITER_CHANGED';
export const INPUT_BOOKTITLE_CHANGED = 'INPUT_BOOKTITLE_CHANGED';
export const INPUT_BLOGPOSTTITLE_CHANGED = 'INPUT_BLOGPOSTTITLE_CHANGED';
export const INPUT_BLOGPOSTAUTHOR_CHANGED = 'INPUT_BLOGPOSTAUTHOR_CHANGED';
export const INPUT_BLOGPOSTURL_CHANGED = 'INPUT_BLOGPOSTURL_CHANGED';
export const INPUT_VIDEOTITLE_CHANGED = 'INPUT_VIDEOTITLE_CHANGED';
export const INPUT_VIDEOURL_CHANGED = 'INPUT_VIDEOURL_CHANGED';

export const BOOKS_RECEIVED = 'BOOKS_RECEIVED';
export const BLOGPOSTS_RECEIVED = 'BLOGPOSTS_RECEIVED';
export const VIDEOS_RECEIVED = 'VIDEOS_RECEIVED';

export const NEW_MESSAGE = 'NEW_MESSAGE';
export const TIP_SENT = 'TIP_SENT';
export const RESET_MESSAGE = 'RESET_MESSAGE';

const postSuccessful = 'Tietojen lähetys onnistui.'
const postFailed = 'Tietojen lähetys ei onnistunut';
const getFailed = 'Tietojen hakeminen ei onnistunut.'
const deleteFailed = 'Lukuvinkin poistaminen ei onnistunut.'

export function clickAction() {
  return {
    type: CLICK,
  };
}

export function inputBookWriterChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKWRITER_CHANGED,
  };
}

export function inputBookTitleChangedAction(input) {
  return {
    input: input,
    type: INPUT_BOOKTITLE_CHANGED,
  };
}

export function inputBlogpostTitleChangedAction(input) {
  return {
    input: input,
    type: INPUT_BLOGPOSTTITLE_CHANGED,
  };
}

export function inputBlogpostAuthorChangedAction(input) {
  return {
    input: input,
    type: INPUT_BLOGPOSTAUTHOR_CHANGED,
  };
}

export function inputBlogpostUrlChangedAction(input) {
  return {
    input: input,
    type: INPUT_BLOGPOSTURL_CHANGED,
  };
}

export function inputVideoTitleChangedAction(input) {
  return {
    input: input,
    type: INPUT_VIDEOTITLE_CHANGED,
  };
}

export function inputVideoUrlChangedAction(input) {
  return {
    input: input,
    type: INPUT_VIDEOURL_CHANGED,
  };
}

export function newMessageAction(message) {
  return {
    message,
    type: NEW_MESSAGE,
  }
}

export function booksReceivedAction(books) {
  return {
    books,
    type: BOOKS_RECEIVED,
  }
}

export function blogpostsReceivedAction(blogposts) {
  return {
    blogposts,
    type: BLOGPOSTS_RECEIVED,
  }
}

export function videosReceivedAction(videos) {
  return {
    videos,
    type: VIDEOS_RECEIVED,
  }
}

export function resetMessageAction() {
  return {
    type: RESET_MESSAGE,
  }
}

export function getBooksAction() {
  return async function getter(dispatch, getState, api) {
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

export function getBlogpostsAction() {
  return async function getter(dispatch, getState, api) {
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

export function getVideosAction() {
  return async function getter(dispatch, getState, api) {
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

export function postBookAction() {
  return async function submitter(dispatch, getState, api) {
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

export function postBlogpostAction() {
  return async function submitter(dispatch, getState, api) {
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


export function postVideoAction() {
  return async function submitter(dispatch, getState, api) {
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

export function deleteBookAction(id) {
  return async function deleter(dispatch, getState, api) {
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

export function deleteVideoAction(id) {
  return async function deleter(dispatch, getState, api) {
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


export function deleteBlogpostAction(id) {
  return async function deleter(dispatch, getState, api) {
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
