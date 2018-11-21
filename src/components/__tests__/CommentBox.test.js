import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;
const testComment = 'test comment';

beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: {
            value: testComment
        }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual(testComment);
});

it('should empty text area when form is submitted', () => {
    wrapped.find('textarea').simulate('change', {
        target: {
            value: testComment
        }
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual(testComment);

    wrapped.find('form').simulate('submit');

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
});
