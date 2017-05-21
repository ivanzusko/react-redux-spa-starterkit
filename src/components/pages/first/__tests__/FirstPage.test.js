import React from 'react';
import { shallow } from 'enzyme';

import FirstPage from '../FirstPage';

describe('FirstPage', () => {
  describe('#render', () => {
    it('should render without crashing', () => {
      const wrapper = shallow(<FirstPage />);

      expect(wrapper.find('h1').length).toEqual(1);
    });
  });
});
