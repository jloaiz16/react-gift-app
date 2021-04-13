import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../../../src/components/AddCategory';
import '@testing-library/jest-dom';

describe('<AddCategory /> suit test', () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('Should render <AddCategory /> properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should change the input text value', () => {
    const input = wrapper.find('input');
    const value = 'Testing';
    input.simulate('change', { target: { value } });
    const inputAfter = wrapper.find('input');
    expect(inputAfter.prop('value')).toBe(value);
  });

  test('Shouldnt submit on form', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    window.alert = jsdomAlert;
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should call setCateogies and clean input value', () => {
    const value = 'Testing';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
