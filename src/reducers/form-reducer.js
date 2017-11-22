import { createReducer } from 'redux-create-reducer';
import {
  CLICK,
  INPUT_BOOKWRITER_CHANGED,
  INPUT_BOOKTITLE_CHANGED,
  POST_TIP_FAILED,
  POST_TIP_SUCCESSFUL,
  TIP_SENT,
} from '../state/actions';

const tipPostSuccessfulMessage = "Lukuvinkin lähettäminen onnistui.";
const tipPostFailedMessage = "Lukuvinkin lähettäminen epäonnistui."

const initialState = {
  bookAuthorInput: "",
  bookNameInput: "",
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
      bookAuthorInput: action.input,
    };
  },
  [INPUT_BOOKTITLE_CHANGED](state, action) {
    return {
      ...state,
      bookNameInput: action.input,
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
});
