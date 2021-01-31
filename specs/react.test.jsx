import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import FilterForm from '../client/src/components/FilterForm.jsx';
import EmployeeList from '../client/src/components/EmployeeList.jsx';
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

describe('EmployeeList', () => {
  const temp = {
    employees: [{
      age: 39, name: 'Beyonce Knowles', _id: '60125ef63bf83861e012ebf2', department: 'Music',
    }, {
      age: 38, department: 'Film', name: 'Anne Hathaway', _id: '60125ef63bf83861e012ebf4',
    }],
  };

  const wrapper = shallow(<EmployeeList {...temp} />);

  it('renders correct tags', () => {
    expect(wrapper.find('tbody')).toExist();
  });

  it('Component availability', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
