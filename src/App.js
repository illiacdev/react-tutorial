import React, {Component} from 'react';
import './App.css';
import Counter from "./Counter";
import {createStore} from 'redux'
import {reduce} from './actions'

class App extends Component {
    // const
    // store = createStore(reduce);

    render() {
        const store = createStore(reduce);

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
                <Counter/>
            </div>
        );
    }
}

export default App;
