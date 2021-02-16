import { FUNC_INC, FUNC_DEC } from '../actionTypes';

const initialState = { count: 0 };

const FunctionReducer = (state = initialState, action) => {
	switch (action.type) {
		case FUNC_INC: {
			return {
				...state,
				count: state.count + 1,
			};
		}
		case FUNC_DEC: {
			return {
				...state,
				count: state.count - 1,
			};
		}
		default: {
			return state;
		}
	}
};

export default FunctionReducer;
