import React, {Component} from 'react';

class OuterComponent extends Component {

    constructor(props, context) {
        super(props, context);
        console.log(props);
    }

    render() {
        return (
            <div>
                아우터 {this.props.name}
            </div>
        );
    }
}

export default OuterComponent;