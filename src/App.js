import react from 'react';
import { Route, Link, Switch } from 'react-router';
import Home from '../src/components/homePage'
import Nav from '../src/components/navbar'

function App() {
	return (
	<>
		<Nav />
		<Home />
	</>);
}

export default App;
