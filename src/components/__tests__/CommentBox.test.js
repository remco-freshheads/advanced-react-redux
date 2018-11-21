import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('has a textarea and a button', () => {

});
