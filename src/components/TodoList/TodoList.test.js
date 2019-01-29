import React from 'react';
import { shallow } from 'enzyme';
import TodoList from './index';

const todos = [
    { id: 1, title: 'Make coffee' },
    { id: 2, title: 'Learn Enzyme' },
    { id: 3, title: 'Become a React Ninja' },
];

it('should render todos', () => {
    const wrapper = shallow(<TodoList />);

    wrapper.setState({ todos });

    expect(wrapper.find('li')).toHaveLength(todos.length);
});
