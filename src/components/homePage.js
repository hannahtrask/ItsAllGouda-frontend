import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../scss/homepage.scss";
import Display from "./displayFoods";

function Home(props) {
  const url = "https://its-all-gouda-backend.herokuapp.com/gouda";

  const [initialMood, setInitialMood] = useState("happy");
  const [mood, setMood] = useState([]);
  // const [dropdownOpen, setDropdownOpen] = React.useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  // HANDLE CHANGE SETS THE INITIAL MOOD STATE AND WHAT IS SHOWN ON PAGE LOAD IN THIS CASE WE SHOW 'HAPPY' FOODS ON PAGE LOAD
  const handleChange = (event) => {
    setInitialMood(event.target.value);
  };

  // Get moods function fetches the url based on which mood state is picked...if it is happy it gets all of the moods with the name:Happy... if its sad it gets all of the moods with the name: Sad... this only works if its capitalized right now so we will have to write some code taht fixes that
  const getMoods = () => {
    fetch(url + "/moods/" + initialMood)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMood(data);
      });
  };

  // This use Effect works on page load and whenever the initialMood is changed by the dropdown.
  React.useEffect(() => getMoods(), [initialMood]);

  return (
    <div className="homepage">
      <h1 className="goudatitle">It's all Gouda</h1>
      <h2>Quarantine Food Picker</h2>
      <img
        src="https://i.ibb.co/D5ZkY8D/luke-southern-4-GShi-SQpcg-unsplash.jpg"
        alt="luke-southern-4-GShi-SQpcg-unsplash"
        border="0"
      />
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How you Feelin'?</Form.Label>
          <br />
          <Form.Control as="select" onChange={handleChange}>
            <option>Happy</option>
            <option>Sad</option>
            <option>Moody</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <br />
      <Display mood={mood} />
    </div>
  );
}

export default Home;
