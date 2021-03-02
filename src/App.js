import './App.css';
import ComponentExample from './components/ClassExample';
import FunctionExample from './components/FunctionExample';

function App() {
	return (
		<div>
			<h2 className="meathodLabel">Traditional Redux</h2>
			<ComponentExample />
			<FunctionExample />
		</div>
	);
}

export default App;
