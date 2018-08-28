import React from 'react';
import {connect} from 'dva';
//
// const One = (props)=> {
//
// return (
//     <ul>
//       <li>1</li>
//       <li>1</li>
//     </ul>
//   );
// };
//
// export default One;

// import React from 'react';
// import { connect } from 'dva';
//
// //这里是引用 model中的数据
const One = ({ dispatch, one }) => {
  // console.log(one);
  function delDelete(id) {
    dispatch({
      type: 'one/delete',
      payload: id,
    });
  }
  return (
    <ul>
      {one.map(item=>
        <li key={item.id}>{item.name}<button onClick={()=>delDelete(item.id)}>删除</button></li>
      )}
    </ul>
  );
};

export default connect(({ one }) => ({
  one,
}))(One);
