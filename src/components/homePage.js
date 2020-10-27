import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../scss/homepage.scss";

function Home() {
  console.log("hello homePage");
  // const [dropdownOpen, setDropdownOpen] = React.useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="homepage">
      <p className="title">It's all Gouda</p>
      <h2>Quarantine Food Picker</h2>
      <img
        src="https://i.ibb.co/D5ZkY8D/luke-southern-4-GShi-SQpcg-unsplash.jpg"
        alt="luke-southern-4-GShi-SQpcg-unsplash"
        border="0"
      />
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>
            <h1>How you Feelin'?</h1>
          </Form.Label>
          <br />
          <Form.Control className="emotions" as="select">
            <option>Happy</option>
            <option>Sad</option>
            <option>Moody</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <br />
    </div>

    // https://previews.123rf.com/images/romastudio/romastudio1603/romastudio160300223/54088692-organic-food-background-studio-photo-of-different-fruits-and-vegetables-on-old-wooden-table-high-res.jpg
  );
}

export default Home;
