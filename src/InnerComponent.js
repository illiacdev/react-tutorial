import React, {Component} from 'react';

class InnerComponent extends Component {
    render() {
        return (
            <div>
                이너컴포넌트 {this.props.name}
            </div>
        );
    }
}

export default InnerComponent;