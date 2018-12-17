import React, {Component} from 'react';
import {createStore} from 'redux'
import {reduce} from './simple_actions_n_reduce'
import simple_actions_n_reduce from "./simple_actions_n_reduce";

const store = createStore(reduce);

class BasicReduxCounter extends Component {

    handleInc = () => {
        /*this.setState({
            number: this.state.number + 1
        })*/

        store.dispatch({type: simple_actions_n_reduce.INC});
    }


    handleDec = () => {
        /*this.setState({
            number: this.state.number - 1
        })*/


        store.dispatch({type: simple_actions_n_reduce.DEC});
    }


    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
        this.usc = store.subscribe(() => {
            this.setState(store.getState());
        });
        console.log(this);
    }

    componentWillUnmount() {
        this.usc();
    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <h1>값: {this.state.number}</h1>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div>
        );
    }
}

export default BasicReduxCounter;