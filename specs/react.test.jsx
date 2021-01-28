import React from 'react';
import { mount, shallow } from 'enzyme';

import App from '../client/src/App.jsx';
import EmployeeList from '../client/src/EmployeeList.jsx';
import FilterForm from '../client/src/FilterForm.jsx';
import SearchForm from '../client/src/SearchForm.jsx';

describe('FilterForm', () => {
  const wrapper = mount(<FilterForm />);
  it('has states', () => {
    expect(wrapper).toHaveState('value');
  });
});
