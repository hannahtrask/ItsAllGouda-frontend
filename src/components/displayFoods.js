import React from "react";
import Form from "react-bootstrap/Form";
import "../scss/homepage.scss";

function Display(props) {
  const { mood } = props;
  console.log(mood[0]);
  const loaded = () => (
    <div className="Display">
      <h1 className="moodName">{mood[0].name}</h1>
      <button className="MoodFood">Add Your Mood Food</button>
      {mood[0].foods.map((food) => {
        return (
          <div key={food._id}>
            <h1>{food.name}</h1>
            <img src={food.img} alt=""></img>
            <button className="EditDelete">Edit</button>
            <button className="EditDelete">Delete</button>
          </div>
        );
      })}
    </div>
  );
  const loading = <h1>Loading...</h1>;
  return mood.length > 0 ? loaded() : loading;
}

export default Display;
