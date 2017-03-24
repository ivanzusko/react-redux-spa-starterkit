/**
 * src/actions/sampleActions.js
 */

import {
  SAMPLE_ACTION,
} from '../constants/ActionTypes';

/**
 * @name showSampleAction
 * @param {Object} sampleParamObject - info received from somewhere and should be placed in reducer
 * @returns {{ type: String, payload: Object }} - returns everything in sampleReducer.js as an action object
 */
export const showSampleAction = sampleParamObject => {
  return {
    type: SAMPLE_ACTION,
    payload: sampleParamObject,
  };
};
