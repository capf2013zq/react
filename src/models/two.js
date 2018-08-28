import { a } from '../services/api';   //调用api接口的数据

export default {
  namespace: 'ceshi',

  state: [],

  effects: {
    * fetch({ id }, { call, put }) {       //put调用同步方法    call处理业务逻辑
      const response = yield call(a);
      yield put({
        type: 'save',
        id: response,
      });
    },
  },
  reducers: {
    save(state, action) {   //==============这里把数据存入state
      return [
        ...state,
        action.id,
      ];
    },
  },
};
