import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../scss/homepage.scss";

function Home() {
  console.log("hello homePage");
  // const [dropdownOpen, setDropdownOpen] = React.useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="homepage">
      <h1>It's all Gouda</h1>
      <h2>Quarantine Food Picker</h2>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwPonxJBPD62Mz4zFtjrxrEBTsrM2DaVbLdA&usqp=CAU"></img>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How you Feelin'?</Form.Label>
          <br />
          <Form.Control as="select">
            <option>Happy</option>
            <option>Sad</option>
            <option>Moody</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <br />
    </div>
  );
}

export default Home;
