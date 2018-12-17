import React, {Component} from 'react';
import './App.css';
import BasicReduxCounter from "./BasicReduxCounter";
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {reduce} from './simple_actions_n_reduce'
import ReactRedux from "./ReactRedux";
import OuterComponent from "./OuterComponent";
import InnerComponent from "./InnerComponent";
import ReduxComponent2 from "./NestedReduxComponent2";

const store = createStore(reduce);

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
