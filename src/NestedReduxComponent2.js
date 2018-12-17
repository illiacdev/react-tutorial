import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from './simple_actions_n_reduce'

const {inc, dec} = actions;

class NestedReduxComponent2 extends Component {

    constructor(props, context) {
        super(props, context);
        console.log("다중",props);
    }

    handleINC = () => {
        this.props.inc();
    }

    handleDEC = () => {
        this.props.dec();
    }

    render() {
        return (

            <div>
                {this.props.number}
                <button onClick={this.handleINC}>+</button>
                <button onClick={this.handleDEC}>-</button>
            </div>
        );
    }
}

export default connect((state)=>({number:state.number}),{inc,dec})(NestedReduxComponent2)
// export default ReduxComponent2;