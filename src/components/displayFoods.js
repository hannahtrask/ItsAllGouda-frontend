import React from "react";
import Form from "react-bootstrap/Form";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import "../scss/displayFoods.scss";

function Display(props) {
  const { mood } = props;
  console.log(mood[0]);
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
                  <button className="EditDelete">Edit</button>
                  <button className="EditDelete">Delete</button>
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
