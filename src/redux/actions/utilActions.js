import { IS_LOADING, IS_NOT_LOADING } from '../actionTypes';

export const setLoading = (isLoading) => {
	if (isLoading) {
		return { type: IS_LOADING };
	} else {
		return { type: IS_NOT_LOADING };
	}
};
