import { IS_LOADING, IS_NOT_LOADING } from '../actionTypes';
const initialState = { isLoading: false };

const UtilReducers = (state = initialState, action) => {
	switch (action.type) {
		case IS_LOADING: {
			return {
				...state,
				isLoading: true,
			};
		}
		case IS_NOT_LOADING: {
			return {
				...state,
				isLoading: false,
			};
		}
		default: {
			return state;
		}
	}
};

export default UtilReducers;
