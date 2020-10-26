import React from 'react';
import { Route, Link, Switch } from 'react-router';
import Home from '../src/components/homePage';
import Nav from '../src/components/navbar';
import Footer from '../src/components/footer';
import Form from '../src/components/form';

function App() {
	return (
		<>
			<Nav />
			<Home />
			<Footer />
			<Form />
		</>
	);
}

export default App;
