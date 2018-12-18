import React, { Component } from 'react';
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import factory  from 'redux-saga'

import {reduce} from './store/actions'
import {sagaMain} from './store/saga'

import logo from './logo.svg';
import './App.css';
import ReduxComponent from "./ReduxComponent";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

let sagaMiddleware = factory();
const store = createStore(reduce,composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(sagaMain);
class App extends Component {
  render() {
      return (
          <div className="App">

              <Provider store={store}>
                  <ReduxComponent/>
              </Provider>
          </div>
      );
  }
}

export default App;
