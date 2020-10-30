import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../src/components/homePage';
import Nav from '../src/components/navbar';
import Footer from '../src/components/footer';
import About from '../src/components/about';
import Team from '../src/components/team';
import Form from '../src/components/form';

function App() {
	const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
	const [initialMood, setInitialMood] = useState('happy');
	const [mood, setMood] = useState([]);

	const getMoods = () => {
		fetch(url + '/moods/' + initialMood)
			.then((response) => response.json())
			.then((data) => {
				setMood(data);
			});
	};

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

	const [newFoodId, setNewFoodId] = useState('here it is');

	const handleSetFoodId = (state) => {
		setNewFoodId(state);
	};

	const handleUpdate = (food) => {
		fetch(url + '/foods/' + food.foodId, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(food),
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
					path='/edit/:id'
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
