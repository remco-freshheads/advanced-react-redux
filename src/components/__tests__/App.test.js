import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
    const div = document.create('div');

    // Render Component <App /> in div
    ReactDOM.render(<App />, div);

    // Clean up -> cleans memory when there are multiple tests
    ReactDOM.unmountComponentAtNode(div);
});

// it('shows a comment list', () => {
//
// });
