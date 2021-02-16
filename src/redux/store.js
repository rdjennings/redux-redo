import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import thunk from 'redux-thunk';
import rootReducers from './reducers';

export default createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk))
);