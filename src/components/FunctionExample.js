import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deccrementFunction, slowIncrementFunction } from '../redux/actions';

const FunctionExample = () => {
	const count = useSelector((state) => state.functionReducers.count);
	const isLoading = useSelector((state) => state.utilReducers.isLoading);

	const dispatch = useDispatch();
	const increment = () => {
		dispatch(slowIncrementFunction());
	};
	const decrement = () => {
		dispatch(deccrementFunction());
	};
	return (
		<div className="wrapper">
			<div>Count: {count}</div>
			<div>
				<button disabled={isLoading} onClick={increment}>
					Increment
				</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	);
};

export default FunctionExample;
