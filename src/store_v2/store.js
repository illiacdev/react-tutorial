import * as ra from 'redux-actions'
import {createStore,applyMiddleware} from "redux";
import factory from 'redux-saga'
import {root} from './saga'

export const actions = ra.createActions('INC', 'DEC','DELAY_INC','SUCCESS_DELAY_INC');

const initState = {number: 1}

const reducer = ra.handleActions({
    [actions.inc]: (s, a) => ({...s, number: s.number + 1}),

    [actions.dec]: (s, a) => ({...s, number: s.number - 1}),
    [actions.successDelayInc]: (s, a) =>
    {
        console.log("success delay inc!");
        return {...s, number: s.number + 1};
    }
}, initState);

const sagaMiddleware = factory();

export const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(root);

