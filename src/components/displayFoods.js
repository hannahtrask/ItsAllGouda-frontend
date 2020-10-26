import React from "react"
import Form from "react-bootstrap/Form";
import "../scss/homepage.scss";

function Display() {

    return (
        <div className="Display">
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
            <button className="MoodFood">Add Your Mood Food</button>
            <h1>HAPPY</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLzkq_rw7iHEd7iu-ALprQCCxEt5cUK-Ks4Q&usqp=CAU"></img>
            <button className="EditDelete">Edit</button>
            <button className="EditDelete">Delete</button>
        </div>
    )
}

export default Display