import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import reducers from './reducers';

export default props => {
    return (
        <Provider store={createStore(reducers, {})}>
            {props.children}
        </Provider>
    );
}
