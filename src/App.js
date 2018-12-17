import React, {Component} from 'react';
import './App.css';
import BasicReduxCounter from "./BasicReduxCounter";
import {createStore,compose,applyMiddleware} from 'redux'
import {Provider, connect} from 'react-redux'
import {reduce} from './simple_actions_n_reduce'
import ReactRedux from "./ReactRedux";
import OuterComponent from "./OuterComponent";
import InnerComponent from "./InnerComponent";
import ReduxComponent2 from "./NestedReduxComponent2";


const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const middlewares = []; // 나중에 이 자리에 미들웨어 추가

const store = createStore(reduce,composeEnhancers());
// const store = createStore(reduce);

// const store = createStore(modules, composeEnhancers(
//     applyMiddleware(...middlewares)
// ));


class App extends Component {
    // const
    // store = createStore(reduce);

    render() {

        console.log("store",store);

        return (
            <div className="App">
                {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
                {/*<Foo/>*/}
                {/*<MyCompo name={'프롭스'}/>*/}
                {/*<Counter name={'illiac'}/>*/}
                {/*<BasicReduxCounter/>*/}
                <Provider store={store}>
                    <ReactRedux/>
                    {/*<ReduxComponent2/>*/}
                </Provider>
                <OuterComponent name={'name'}>
                    <InnerComponent/>
                </OuterComponent>
            </div>
        );
    }
}

export default App;
