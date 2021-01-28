import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import FilterForm from '../client/src/components/FilterForm.jsx';
import SearchForm from '../client/src/components/SearchForm.jsx';

describe('App', () => {
  const wrapper = shallow(<App />);
  it('has states', () => {
    expect(wrapper).toHaveState('employees');
  });

  it('Component availability', () => {
    expect(wrapper.exists()).toBe(true);
  });
});

describe('FilterForm', () => {
  const wrapper = shallow(<FilterForm />);
  it('has states', () => {
    expect(wrapper).toHaveState('value');
  });

  it('Component availability', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct tags', () => {
    expect(wrapper.find('form')).toExist();
    expect(wrapper.find('select')).toExist();
    expect(wrapper.find('input')).toExist();
    expect(wrapper.find('option')).toExist();
  });
});

describe('SearchForm', () => {
  const wrapper = shallow(<SearchForm />);
  it('has states', () => {
    expect(wrapper).toHaveState('value');
  });

  it('Component availability', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct tags', () => {
    expect(wrapper.find('form')).toExist();
    expect(wrapper.find('input')).toExist();
  });
});
