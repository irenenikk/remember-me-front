import { createReducer } from 'redux-create-reducer';
import {
  CLICK,
  INPUT_BOOKWRITER_CHANGED,
  INPUT_BOOKTITLE_CHANGED,
  INPUT_BLOGPOSTTITLE_CHANGED,
  INPUT_BLOGPOSTURL_CHANGED,
  INPUT_VIDEOTITLE_CHANGED,
  INPUT_VIDEOURL_CHANGED,
  POST_TIP_FAILED,
  POST_TIP_SUCCESSFUL,
  RESET_MESSAGE,
} from '../state/actions';

const tipPostSuccessfulMessage = "Lukuvinkin lähettäminen onnistui.";
const tipPostFailedMessage = "Lukuvinkin lähettäminen epäonnistui."

const initialState = {
  bookAuthorInput: "",
  bookNameInput: "",
  message: "",
  blogpostTitleInput: "",
  blogpostUrlInput: "",
  videoTitleInput: "",
  videoUrlInput: "",
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
      bookAuthorInput: action.input,
    };
  },
  [INPUT_BOOKTITLE_CHANGED](state, action) {
    return {
      ...state,
      bookNameInput: action.input,
    };
  },
  [INPUT_BLOGPOSTTITLE_CHANGED](state, action) {
    return {
      ...state,
      blogpostTitleInput: action.input,
    };
  },
  [INPUT_BLOGPOSTURL_CHANGED](state, action) {
    return {
      ...state,
      blogpostUrlInput: action.input,
    };
  },
  [INPUT_VIDEOTITLE_CHANGED](state, action) {
    return {
      ...state,
      videoTitleInput: action.input,
    };
  },
  [INPUT_VIDEOURL_CHANGED](state, action) {
    return {
      ...state,
      videoUrlInput: action.input,
    };
  },
  [POST_TIP_SUCCESSFUL](state, action) {
    return {
      ...state,
      message: tipPostSuccessfulMessage,
    };
  },
  [POST_TIP_FAILED](state, action) {
    return {
      ...state,
      message: tipPostFailedMessage,
    };
  },
  [RESET_MESSAGE](state, action) {
    return {
      ...state,
      message: "",
    }
  }
});
