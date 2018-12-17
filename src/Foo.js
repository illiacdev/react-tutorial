import React, {Component} from 'react';
import './Foo.css';

class Foo extends Component {

   /* static defaultProps = {
        name: "기본이름"
    }*/

  static defaultProps = {
    name: '기본'
  }



  render() {
        return (

            <div className='foo'>
                {/*테스트 입니다.{this.props.name}*/}
                {/*<h1>리액트1</h1>*/}
                <h1>리액트2</h1>
                <h1>리액트3</h1>

            </div>
        );
    }
}

export default Foo;

