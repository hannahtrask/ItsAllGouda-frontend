import React from 'react';
import { Route, Link, Switch } from 'react-router';
import Home from '../src/components/homePage'
import Nav from '../src/components/navbar'
import Footer from '../src/components/footer'
import About from '../src/components/about'
import Team from '../src/components/team'

function App() {
	return (
		<>
			<Nav />
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/theteam' component={Team} />
			<Route exact path='/about' component={About} />
			{/*form with go here with route to that*/}
			<Footer />
		</>
	);
}

export default App;
