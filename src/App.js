import React from 'react';
import { Route, Link, Switch } from 'react-router';

import Home from '../src/components/homePage'
import Nav from '../src/components/navbar'
import Footer from '../src/components/footer'
import About from '../src/components/about'
import Team from '../src/components/team'
import Form from '../src/components/form'


function App() {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/theteam' component={Team} />
				<Route path='/about' component={About} />
				<Route path='/create'>
					<Form />
				</Route>
			</Switch>
			{/*form with go here with route to that*/}
			<Footer />
		</>
	);
}

export default App;
