import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../components/authentication/loginForm';

configure({ adapter: new Adapter() });

describe('LoginForm', () => {
  let loginWrapper;
  beforeEach(() => {
    loginWrapper = shallow(<LoginForm />);
  });
  it('should render a componet', () => {
    expect(loginWrapper.length).toEqual(1);
  });
});
