import React from 'react';
import { shallow } from 'enzyme';

import reducer from '../sampleReducer';
import {
  SAMPLE_ACTION,
} from '../../constants/ActionTypes';

describe('sample reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle SAMPLE_ACTION', () => {
    expect(
      reducer(
        {}, {
          type: SAMPLE_ACTION,
          payload: {},
        }
      )
    )
    .toEqual({
      sampleInfo: {},
    });
  });
});
