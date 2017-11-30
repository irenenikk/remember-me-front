import { createReducer } from 'redux-create-reducer';
import {
  CLICK,
  INPUT_BOOKWRITER_CHANGED,
  INPUT_BOOKTITLE_CHANGED,
  INPUT_BOOKDESCRIPTION_CHANGED,
  INPUT_BLOGPOSTTITLE_CHANGED,
  INPUT_BLOGPOSTAUTHOR_CHANGED,
  INPUT_BLOGPOSTURL_CHANGED,
  INPUT_VIDEOTITLE_CHANGED,
  INPUT_VIDEOURL_CHANGED,
  NEW_MESSAGE,
  RESET_MESSAGE,
} from '../state/actions';

const initialState = {
  book: {
    author: "",
    title: "",
    description: "",
  },
  blogpost: {
    title: "",
    author: "",
    url: "",
  },
  video: {
    title: "",
    url: "",
  },
  message: "",
};

export default createReducer(initialState, {
  [CLICK](state, action) {
    return {
      ...state,
    };
  },
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
<<<<<<< HEAD
      blogpost: {
        ...state.blogpost,
=======
      blog: {
        ...state.blog,
>>>>>>> e82842f1d2b5e712bc0f107e0677f6abab8840d4
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
