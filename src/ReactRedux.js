import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from './simple_actions_n_reduce'
import ReduxComponent2 from "./NestedReduxComponent2";

const {inc, dec} = actions;

class ReactRedux extends Component {
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
                <ReduxComponent2/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {number: state.number}
}

const mapDispatchToProps = (dispatch) => {
   return ({
        inc() {
            dispatch(inc());
        },
       dec() {
           dispatch(dec());
       }
   });
}


export default connect(mapStateToProps, mapDispatchToProps)(ReactRedux);
// export default connect(mapStateToProps, {inc,dec})(ReactRedux);