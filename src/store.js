import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers/index';

// `createHistory` is same with `createBrowserHistory`
export const history = createHistory();

// router middleware
const appRouterMiddleware = routerMiddleware(history);


const store = createStore(
	reducers,
	applyMiddleware(appRouterMiddleware)
);

export default store;