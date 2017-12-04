import { createReducer } from 'redux-create-reducer';
import {
  INPUT_BOOKWRITER_CHANGED,
  INPUT_BOOKTITLE_CHANGED,
  INPUT_BOOKDESCRIPTION_CHANGED,
  INPUT_BOOKCOMMENT_CHANGED,
  INPUT_BLOGPOSTTITLE_CHANGED,
  INPUT_BLOGPOSTAUTHOR_CHANGED,
  INPUT_BLOGPOSTURL_CHANGED,
  INPUT_BLOGPOSTCOMMENT_CHANGED,
  INPUT_VIDEOTITLE_CHANGED,
  INPUT_VIDEOURL_CHANGED,
  INPUT_VIDEOCOMMENT_CHANGED,
} from '../state/actions/form-actions';
import {
  NEW_MESSAGE,
  RESET_MESSAGE,
} from '../state/actions/message-actions';

const initialState = {
  book: {
    title: "",
    author: "",
    description: "",
    comment: "",
    read: false,
  },
  blogpost: {
    title: "",
    author: "",
    url: "",
    comment: "",
    read: false,
  },
  video: {
    title: "",
    url: "",
    comment: "",
    read: false,
  },
  message: "",
};

export default createReducer(initialState, {
  [INPUT_BOOKWRITER_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        author: action.input,
      }
    };
  },
  [INPUT_BOOKTITLE_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        title: action.input,
      }
    };
  },
  [INPUT_BOOKDESCRIPTION_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        description: action.input,
      }
    };
  },
  [INPUT_BOOKCOMMENT_CHANGED](state, action) {
    return {
      ...state,
      book: {
        ...state.book,
        comment: action.input,
      }
    };
  },
  [INPUT_BLOGPOSTTITLE_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        title: action.input,
      }
    };
  },
  [INPUT_BLOGPOSTAUTHOR_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        author: action.input,
      }
    };
  },
  [INPUT_BLOGPOSTURL_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        url: action.input,
      }
    };
  },
  [INPUT_BLOGPOSTCOMMENT_CHANGED](state, action) {
    return {
      ...state,
      blogpost: {
        ...state.blogpost,
        comment: action.input,
      }
    };
  },
  [INPUT_VIDEOTITLE_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        title: action.input,
      }
    };
  },
  [INPUT_VIDEOURL_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        url: action.input,
      }
    };
  },
  [INPUT_VIDEOCOMMENT_CHANGED](state, action) {
    return {
      ...state,
      video: {
        ...state.video,
        comment: action.input,
      }
    };
  },
  [NEW_MESSAGE](state, action) {
    return {
      ...state,
      message: action.message,
    };
  },
  [RESET_MESSAGE](state, action) {
    return {
      ...state,
      message: "",
    }
  }
});
