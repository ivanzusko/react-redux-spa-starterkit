import React from 'react';
import { shallow } from 'enzyme';

import { Layout } from '../Layout';
import Header from '../header/Header';

const setup = () => {
  const props = {
    children: <div className="unique" />,
  };
  const wrapper = shallow(<Layout {...props} />);

  return { props, wrapper };
};

describe('Layout', () => {
  describe('#render', () => {
    const { wrapper } = setup();

    it('should render Header', () => {
      expect(wrapper.contains(<Header />)).toBe(true);
    });

    it('should render children', () => {
      expect(wrapper.contains(<div className="unique" />)).toEqual(true);
    });
  });
});
