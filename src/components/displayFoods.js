import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../scss/displayFoods.scss';
import '../scss/homepage.scss';
import { Link } from 'react-router-dom';

function Display(props) {
	const [redirect, setRedirect] = useState(false);
	const [foodId, setFoodId] = useState('');
	const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';

	const { mood } = props;

	const deleteFood = (food) => {
		fetch(url + '/foods/' + food._id, {
			method: 'delete',
		})
			.then(() => setRedirect(true))
			.then(() => loaded())
			.then(() => window.location.reload());
	};

	const handleEditFood = (food) => {
		setFoodId(food);
		props.handleSetFoodId(foodId);
	};

	const loaded = () => (
		<div className='Display'>
			<h1 className='moodName'>{mood[0].name}</h1>
			<button className='MoodFood'>
				<Link to='/create'className="addfood">Add Your Mood Food!</Link>
			</button>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',
					flexWrap: 'wrap',
					margin: '20px',
				}}>
				{mood[0].foods.map((food) => {
					return (
						<div key={food._id}>
							<Card className='cards'>
								<Card.Body style={{ width: '18rem' }}>
									<Card.Title className="cardtitle">{food.name}</Card.Title>
									<Card.Subtitle className="cardauthor"><span>Author:</span>{food.author}</Card.Subtitle>
									<Card.Text className="carddesc">{food.description}</Card.Text>
									<Card.Img className="cardimg"
										src={food.img}
										alt='foods displayed on page'></Card.Img>
									<Link to={`/edit/${food._id}`}>
										<button
											type='button'
											onClick={() => {
												handleEditFood(food._id);
											}}
											className='EditDelete'>
											Edit
										</button>
									</Link>
									<button
										type='button'
										className='EditDelete'
										onClick={() => {
											deleteFood(food);
										}}>
										Delete
									</button>
								</Card.Body>
							</Card>
						</div>
					);
				})}
			</div>
		</div>
	);
	const loading = <h1>Loading...</h1>;
	return mood.length > 0 ? loaded() : loading;
}

export default Display;
