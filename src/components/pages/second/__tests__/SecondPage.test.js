import React from 'react';
import { shallow } from 'enzyme';

import SecondPage from '../SecondPage';

describe('SecondPage', () => {
  describe('#render', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<SecondPage />);

      expect(wrapper.find('h1').length).toEqual(1);
    });
  });
});
