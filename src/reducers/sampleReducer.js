/**
 * src/reducers/sampleReducer.js
 *
 * Example of the reducer. You might have more than one reducer in your project.
 */

import {
  SAMPLE_ACTION,
} from '../constants/ActionTypes';

const initialState = {};

/**
 * @name sampleReducer
 * @param {Object} state - which by default is equal to initialState object
 * @param {Object} action - object with action type and sometimes could contain
 *                          additional keys (like payload etc.)
 * @returns {Object} state - default or updated by action
 */
export default function sampleReducer(state = initialState, action) {
  switch (action.type) {

    case SAMPLE_ACTION:
      return {
        ...state,
        sampleInfo: action.payload,
      };

    default:
      return state;
  }
}
