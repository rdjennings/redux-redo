import React, { Component } from 'react';
import { connect } from 'react-redux';
import { decrementClass, incrementClass } from '../redux/actions';

class ClassExample extends Component {
	render() {
		const { count, decrement, increment } = this.props;

		const incrementCount = () => {
			increment();
		};

		const decrementCount = () => {
			decrement();
		};

		return (
			<div className="wrapper">
				<div>Classes Count: {count}</div>
				<div>
					<button onClick={incrementCount}>Increment Class Counter</button>
					<button onClick={decrementCount}>Decrement Class Counter</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const count = state.classReducers.count;
	return { count };
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(incrementClass()),
		decrement: () => dispatch(decrementClass()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassExample);
