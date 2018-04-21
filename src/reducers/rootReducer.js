import { combineReducers } from 'redux';
import app from './appReducer.js';

const rootReducer = combineReducers({
  app
});

export default rootReducer;