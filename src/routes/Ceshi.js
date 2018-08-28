import React from 'react';
import {connect} from 'dva';
import { Table, Divider, Tag } from 'antd';
import ReactDOM from 'react-dom';
import { urlToList } from '../components/_utils/pathTools';
//===============
const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '项目组',
  dataIndex: 'member',
  key: 'member',
}, {
  title: '名言',
  dataIndex: 'description',
  key: 'description',
}, ];


//============首先做这些步骤
class Ceshi extends React.Component {
  constructor(props) {                     //所有的参数都在props
    super(props);                         //再次申明一个构造方式   构造方法
  }
  componentWillMount() {

    const { dispatch } = this.props;
    const ttime = parseInt(new Date()/1000);
    const ver = '１.0';
    const vid = '0';
    const par = '你的签名';

    dispatch({
      type: "ceshi/fetch",
      id:{time:ttime,version:ver,gvid:vid,signature:'linux',paa:par},
    });
  }
  render() {
    const {ceshi} = this.props;
     console.log( this.props );
    return (
      <div>123</div>
      // <Table columns={columns} dataSource={ceshi[0]} />
    )
  };
}

export default connect((ceshi)=> ceshi)(Ceshi);
                      //命名空间
//dispath 方法哪里来  如果遇到disatch b必须要connect

