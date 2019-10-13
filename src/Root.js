import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';

// destructure the props argument to set initialState argument in case it is not passed in by callers
export default ({ children, initialState = {} }) => {
    return (
        // createstore second argument is the value for setting the inital state of the store
        // <Provider store={createStore(reducers, {})}>
        <Provider store={createStore(reducers, initialState, applyMiddleware(async, stateValidator))}>
            {children}
        </Provider>
    );
};