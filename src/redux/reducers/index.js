import { combineReducers } from 'redux';
import classReducers from './classReducers';
import functionReducers from './functionReducers';
import utilReducers from './utilReducers';

export default combineReducers({
	classReducers,
	functionReducers,
	utilReducers,
});
