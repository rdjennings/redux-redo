import { FUNC_INC, FUNC_DEC } from '../actionTypes';
import { setLoading } from './utilActions';

export const incrementFunction = () => ({
	type: FUNC_INC,
});

export const deccrementFunction = () => ({
	type: FUNC_DEC,
});

export const slowIncrementFunction = () => {
	return (dispatch) => {
		dispatch(setLoading(true));
		setTimeout(() => {
			dispatch(incrementFunction());
			dispatch(setLoading(false));
		}, 1000);
	};
};
