import React from 'react';
import {connect} from 'dva';
import { Table, Divider, Tag } from 'antd';
import ReactDOM from 'react-dom';
import { urlToList } from '../components/_utils/pathTools';

//============首先做这些步骤
class Two extends React.Component {
  constructor(props) {                     //所有的参数都在props
    super(props);                         //再次申明一个构造方式   构造方法
  }
  componentWillMount() {

    const { dispatch } = this.props;

    dispatch({
      type: "two/fetch",
      const :{

      }
    });
  }
  render() {
    const {two} = this.props;
    console.log( this.props );
    return (
      <div>789</div>

    )
  };
}

export default connect((two)=> two)(Two);
