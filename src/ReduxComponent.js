import React, {Component} from 'react';
import {connect} from 'react-redux'
import {actions} from './store/actions'
import im from 'immutable';
const {inc, dec, delay_inc} = actions;


const List = ({users}) => {

    const renderTest = () => {
        let map = users.map((item) => {
            return (
                <div key={item.id}>
                    <p>id : {item.id}</p>
                    <p>name : {item.item.name}</p>
                </div>
            );
        });

        return (
            <div>{map}</div>
        );
    }


    const renderUsers = () => {
        let array = [];
        array.push(<p>테스트1</p>)
        array.push(<p>테스트2</p>)
        array.push(<p>테스트4</p>)
        return array;
        // return map;
    }

    return (
        <div>
            {renderTest()}
        </div>
    );
}

class ReduxComponent extends Component {

    constructor(props, context) {
        super(props, context);

        let array = [];
        array.push({id: 1, item: {name: 'name1'}});
        array.push({id: 2, item: {name: 'name2'}});
        array.push({id: 3, item: {name: 'name3'}});

        let list = im.List(array);


        this.state = {
            users: list
        };



    }

// state = {number2 : 100}
    
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log(nextState);
    }

    handleInc = () => {
        this.props.inc();


        /*this.setState({...this.state, number2: this.state.number2 + 1}, () => {
            console.log(this.state.number2);
        })*/
    }

    handleChageName = ()=>{
        let users = this.state.users;
        let list;
        // list = users.set(0, {id: 1, item: {name: 'name2'}});
        list = users.update(0,value => {
            console.log(value);
            value.id = 100;

            return value;
        });


        this.setState({...this.state,users: list});
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
                <button onClick={this.handleChageName}>이름변경</button>
                <List users={this.state.users}/>
            </div>
        );
    }
}

// export default ReduxComponent;
export default connect((state) => ({number: state.number})
    , {inc, dec, delay_inc})(ReduxComponent)
