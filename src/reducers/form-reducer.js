import { createReducer } from 'redux-create-reducer';
import { CLICK , INPUT_BOOKWRITER_CHANGED, INPUT_BOOKTITLE_CHANGED} from '../state/actions';

const initialState = {
  inputBookWriterValue: "",
  inputBookTitleValue: "",
  demoClickValue: false ,
};

export default createReducer(initialState, {
  [CLICK](state, action) {
    return {
      ...state,
      demoClickValue: !state.demoClickValue,
    };
  },
  [INPUT_BOOKWRITER_CHANGED](state, action) {
    return {
      ...state,
      inputBookWriterValue: action.input,
    };
  },
  [INPUT_BOOKTITLE_CHANGED](state, action) {
    return {
      ...state,
      inputBookTitleValue: action.input,
    };
  }
});
