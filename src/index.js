import './polyfill';
import dva from 'dva';

import createHistory from 'history/createHashHistory';
// user BrowserHistory
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';
// 1. Initialize
const app = dva({
  // history: createHistory(),
  initialState: {
    one: [
      { name: '大可乐', id: 1 },
      { name: '华少', id: 2 },
      { name: '马士林', id: 3 },
      { name: '张月月', id: 4 },
      { name: '吉尔', id: 5 },
      { name: '罗大仙', id: 6 },
      { name: '段总', id: 7 },
      { name: '大个', id: 8 },
      { name: '大力', id: 9 },
      { name: '阿其', id: 10 },
    ],
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);
app.model(require('./models/one').default);
app.model(require('./models/ceshi').default);


// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
