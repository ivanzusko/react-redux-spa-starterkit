import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  describe('#render', () => {
    it('should render self', () => {
      expect(wrapper.find('header.Header').length).toBe(1);
    });

    it('should render Links', () => {
      expect(wrapper.find('Link').length).toBe(2);
    });
  });
});
