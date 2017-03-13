/**
 * src/reducers/index.js
 *
 * include all reducers which should be exported as rootReducer from current folder(src/reducers).
 * 1. import all of your reducers;
 * 2. add them to the rootReducer;
 * 3. export rootReducer (which combine all the reducers you've added);
 */

import { combineReducers } from 'redux';

// Sample Reducer
import sampleReducer from './sampleReducer';

const rootReducer = combineReducers({
  sampleReducer,
});

export default rootReducer;
