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

export const POST_TIP_SUCCESSFUL = 'POST_TIP_SUCCESSFUL';
export const POST_TIP_FAILED = 'POST_TIP_FAILED';
export const TIP_SENT = 'TIP_SENT';
export const RESET_MESSAGE = 'RESET_MESSAGE';

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

export function getBooksAction() {
  return async function getter(dispatch, getState, api) {
    api.getBooks()
       .then(
         (response) => {
          dispatch(booksReceivedAction(response));
         }
       , () => {
         console.info("Couldn't fetch books");
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
         console.info("Couldn't fetch blogposts");
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
         console.info("Couldn't fetch videos");
       })
  };
}

export function postBookAction() {
  return async function submitter(dispatch, getState, api) {
    api.postBook(getState().form)
    .then(
      (response) => {
        console.info("posting book successful");
        dispatch(getBooksAction());
        dispatch(postTipSuccessfulAction());
      },
      (error) => {
        console.info("Posting book failed");
        dispatch(postTipFailedAction());
      },
    );
  };
}

export function postBlogpostAction() {
  return async function submitter(dispatch, getState, api) {
    api.postBlogpost(getState().form)
    .then(
      (response) => {
        console.info("posting blogpost successful");
        dispatch(getBlogpostsAction());
        dispatch(postTipSuccessfulAction());
      },
      (error) => {
        console.info("Posting blogpost failed");
        dispatch(postTipFailedAction());
      },
    );
  };
}


export function postVideoAction() {
  return async function submitter(dispatch, getState, api) {
    api.postVideo(getState().form)
    .then(
      (response) => {
        console.info("posting video successful");
        dispatch(getVideosAction());
        dispatch(postTipSuccessfulAction());
      },
      (error) => {
        console.info("Posting videos failed");
        dispatch(postTipFailedAction());
      },
    );
  };
}

export function postTipSuccessfulAction() {
  return {
    type: POST_TIP_SUCCESSFUL,
  }
}

export function postTipFailedAction() {
  return {
    type: POST_TIP_FAILED,
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
