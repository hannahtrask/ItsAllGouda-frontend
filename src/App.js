import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router';

import Home from '../src/components/homePage';
import Nav from '../src/components/navbar';
import Footer from '../src/components/footer';
import About from '../src/components/about';
import Team from '../src/components/team';
import Form from '../src/components/form';
import EditForm from '../src/components/editForm';

function App() {
	const url = 'http://localhost:4000/gouda';
	// const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
	const [initialMood, setInitialMood] = useState('happy');
	const [mood, setMood] = useState([]);

	const getMoods = () => {
		fetch(url + '/moods/' + initialMood)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setMood(data);
			});
	};

	const handleChange = (state) => {
		setInitialMood(state);
	};

	React.useEffect(() => getMoods(), [initialMood]);

	const [newFood, setNewFood] = useState({});

	const handleCreate = (newState) => {
		console.log('handlecreate is working', newState);
		fetch(url + '/moods/' + newState.mood, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newState),
		}).then(() => getMoods());
	};

	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home handleChange={handleChange} mood={mood} />
				</Route>
				<Route path='/theteam' component={Team} />
				<Route path='/about' component={About} />
				<Route
					path='/create'
					render={(rp) => (
						<Form {...rp} label='Submit' handleSubmit={handleCreate} />
					)}
				/>
				<Route
					path='/edit'
					render={(rp) => (
						<Form
							{...rp}
							label='update'
							mood={mood}
							handleSubmit={handleCreate}
						/>
					)}
				/>
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
