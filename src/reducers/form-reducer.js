import { createReducer } from 'redux-create-reducer';
import { CLICK , INPUT_BOOKWRITER_CHANGED, INPUT_BOOKTITLE_CHANGED} from '../state/actions';

const initialState = {
  bookAuthorInput: "",
  bookNameInput: "",
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
  }
});
