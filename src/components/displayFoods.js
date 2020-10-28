import React, { useState } from "react";
import { Redirect } from 'react-router';
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import "../scss/displayFoods.scss";
import '../scss/homepage.scss';
import { Link } from 'react-router-dom'

function Display(props) {
  const [redirect, setRedirect] = useState(false);
  
  const url = 'http://localhost:4000/gouda';
	// const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
  
  const { mood } = props;
  
	const deleteFood = (food) => {
		fetch(url + '/foods/' + food._id, {
			method: 'delete',
		})
			.then(() => setRedirect(true))
			.then(() => loaded())
			.then(()=>window.location.reload())
	};
  
  const loaded = () => (
    <div className="Display">
      <h1 className="moodName">{mood[0].name}</h1>
      <button className="MoodFood">Add Your Mood Food</button>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', margin: '20px' }}>
        {mood[0].foods.map((food) => {
          return (
            <div key={food._id}>
              <Card className='cards'>
                <Card.Body style={{ width: '18rem' }}>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Subtitle>Author: {food.author}</Card.Subtitle>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Img src={food.img} alt="foods displayed on page"></Card.Img>
                  <button className="EditDelete"><Link to='/create'>Edit</Link></button>
                  <button className="EditDelete" onClick={() => {
								deleteFood(food);
							}}>Delete</button>
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
