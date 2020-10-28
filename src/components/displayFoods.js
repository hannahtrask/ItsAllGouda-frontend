import React, { useState } from 'react';
import { Redirect } from 'react-router';
import '../scss/homepage.scss';

function Display(props) {
	const [redirect, setRedirect] = useState(false);

	const url = 'http://localhost:4000/gouda';
	// const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
	const { mood } = props;
	console.log(props)
	const deleteFood = (food) => {
		fetch(url + '/foods/' + food._id, {
			method: 'delete',
		})
			.then(() => setRedirect(true))
			.then(() => loaded())
			.then(()=>window.location.reload())
	};

	const loaded = () => (
		<div className='Display'>
			<h1 className='moodName'>{mood[0].name}</h1>
			<button className='MoodFood'>Add Your Mood Food</button>
			{mood[0].foods.map((food) => {
				return (
					<div key={food._id}>
						<h1>{food.name}</h1>
						<img src={food.img} alt=''></img>
						<button className='EditDelete'>Edit</button>
						<button

							className='EditDelete'
							onClick={() => {
								deleteFood(food);
							}}>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
	const loading = <h1>Loading...</h1>;

	
	
	return mood.length > 0 ? loaded() : loading;
		
}

export default Display;
