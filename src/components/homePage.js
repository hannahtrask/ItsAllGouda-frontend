import React from 'react';
import Form from 'react-bootstrap/Form';
import '../scss/homepage.scss';
import Display from './displayFoods';

function Home(props) {
	const { mood, handleSetFoodId } = props;

	const handleChange = (event) => {
		props.handleChange(event.target.value);
	};

	return (
		<div className='homepage'>
			<h1 className='goudatitle'>It's all Gouda</h1>
      <h2 className="goudasub">Quarantine Food Picker</h2>
			<img
				src='https://i.ibb.co/D5ZkY8D/luke-southern-4-GShi-SQpcg-unsplash.jpg'
				alt='luke-southern-4-GShi-SQpcg-unsplash'
				border='0'
			/>
			<Form>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label className="formlabel">How you Feelin'?</Form.Label>
					<br />
          <br />
					<Form.Control className="dropdown" as='select' onChange={handleChange}>
						<option>Happy</option>
						<option>Blue</option>
						<option>Sassy</option>
						<option>Mad</option>
						<option>Punchy</option>
					</Form.Control>
				</Form.Group>
			</Form>
			<br />
			<Display mood={mood} handleSetFoodId={handleSetFoodId} />
		</div>
	);
}

export default Home;
