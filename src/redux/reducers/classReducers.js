import { CLASS_INC, CLASS_DEC } from '../actionTypes';

const initialState = { count: 0 };

const ClassReducer = (state = initialState, action) => {
	switch (action.type) {
		case CLASS_INC: {
			return {
				...state,
				count: state.count + 1,
			};
		}
		case CLASS_DEC: {
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

export default ClassReducer;
