import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function homePage() {
  console.log("hello homePage");
  return (
    <>
      <h1>It's all Gouda</h1>
      <h3>Quarantine Food Picker</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwPonxJBPD62Mz4zFtjrxrEBTsrM2DaVbLdA&usqp=CAU"></img>
      <Dropdown className="Dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          How Ya Feelin'?
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Happy</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Sad</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Moody</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default homePage;
