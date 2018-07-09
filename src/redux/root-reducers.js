import { combineReducers } from 'redux'
import { rightChanged } from './right-reducers';
import { leftChanged } from './left-reducers';

export default combineReducers({
  rightChanged,
  leftChanged,
})
