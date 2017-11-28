// import Api from '../utils/api';
import { combineReducers } from 'redux';
import formReducer from '../reducers/form-reducer';
import listReducer from '../reducers/search-result-reducer';

export default combineReducers({
  form: formReducer,
  list: listReducer,
});
