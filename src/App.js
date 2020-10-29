import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router';

import Home from '../src/components/homePage';
import Nav from '../src/components/navbar';
import Footer from '../src/components/footer';
import About from '../src/components/about';
import Team from '../src/components/team';
import Form from '../src/components/form';

function App() {
	const url = 'http://localhost:4000/gouda';
	// const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
	const [initialMood, setInitialMood] = useState('happy');
	const [mood, setMood] = useState([]);

	//This was moved from Home to here so that it could be passed as props easier
	const getMoods = () => {
		fetch(url + '/moods/' + initialMood)
			.then((response) => response.json())
			.then((data) => {
				setMood(data);
			});
	};

	//handleChange and handleCreate were moved so that we can re use the form for create and update like in the mern lab
	const handleChange = (state) => {
		setInitialMood(state);
	};

	React.useEffect(() => getMoods(), [initialMood]);

	const handleCreate = (newState) => {
		fetch(url + '/moods/' + newState.mood, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newState),
		}).then(() => getMoods());
	};

	const [newFoodId, setNewFoodId] = useState('');

	const handleSetFoodId = (state) => {
		setNewFoodId(state);
	};
	console.log(newFoodId);

	const handleUpdate = (updateState) => {
		fetch(url + '/foods/' + newFoodId, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updateState),
		}).then(() => {
			getMoods();
		});
	};

	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home
						handleChange={handleChange}
						mood={mood}
						handleSetFoodId={handleSetFoodId}
					/>
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
							handleSubmit={handleUpdate}
						/>
					)}
				/>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
