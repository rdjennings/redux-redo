import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CLASS_DEC, CLASS_INC } from '../redux/actionTypes';

class ComponentExample extends Component {
	render() {
		const incrementCount = () => {
			this.props.increment();
		};
		const decrementCount = () => {
			this.props.decrement();
		};
		return (
			<div className="wrapper">
				<div>Count: {this.props.count}</div>
				<div>
					<button onClick={incrementCount}>Increment</button>
					<button onClick={decrementCount}>Decrement</button>
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
		increment: () => dispatch({ type: CLASS_INC }),
		decrement: () => dispatch({ type: CLASS_DEC }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentExample);
