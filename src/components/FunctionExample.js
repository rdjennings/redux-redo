import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deccrementFunction, slowIncrementFunction } from '../redux/actions';
import classnames from 'classnames';

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
			<div>Function Count: {count}</div>
			<div>
				<button
					className={classnames({ busy: isLoading })}
					disabled={isLoading}
					onClick={increment}
				>
					Increment Functions Counter
				</button>
				<button onClick={decrement}>Decrement Functions Counter</button>
			</div>
		</div>
	);
};

export default FunctionExample;
