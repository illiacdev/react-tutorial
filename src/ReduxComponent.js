import React, {Component} from 'react';
import {connect} from 'react-redux'
import {actions} from './actions'

const {inc, dec,delay_inc} = actions;

class ReduxComponent extends Component {
    handleInc = () => {
        this.props.inc();
    }

    handleDelayInc = () => {
        this.props.delay_inc();
    }

    handleDec = () => {
        this.props.dec();
    }

    render() {
        return (
            <div>
                {this.props.number}
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDelayInc}>delay +</button>
                <button onClick={this.handleDec}>-</button>

            </div>
        );
    }
}

// export default ReduxComponent;
export default connect((state) => ({number: state.number})
    , {inc, dec,delay_inc})(ReduxComponent)
