import { CLASS_DEC, CLASS_INC } from '../actionTypes';

export const incrementClass = () => ({
	type: CLASS_INC,
});

export const decrementClass = () => ({
	type: CLASS_DEC,
});
