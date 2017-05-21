import React from 'react';
import { shallow } from 'enzyme';

import * as actions from '../sampleActions';
import {
  SAMPLE_ACTION,
} from '../../constants/ActionTypes';

describe('sample actions', () => {
  describe('showSampleAction', () => {
    it('should return action with proper type', () => {
      expect(actions.showSampleAction().type).toBe(SAMPLE_ACTION);
    });

    it('should return action with proper payload', () => {
      const payload = {
        sampleParamObject: {},
      };

      expect(actions.showSampleAction(payload).payload).toBe(payload);
    });

    it('should not pass any side payload', () => {
      const sampleParamObject = {};

      expect(actions.showSampleAction(sampleParamObject)).toEqual({
        type: SAMPLE_ACTION,
        payload: sampleParamObject,
      });
    });
  });
});
