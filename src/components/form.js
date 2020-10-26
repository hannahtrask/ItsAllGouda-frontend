import React, { useState, useEffect } from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer(props) {
	const [addFood, setAddFood] = useState({});
	const [state, setState] = useState({
		mood: '',
		food: '',
		img: '',
		description: '',
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setAddFood(state);
	};

	return (
		<div className='form'>
			<h1>Add Mood Food</h1>
			<Form onSubmit={handleSubmit} className='form'>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>How you Feelin'?</Form.Label>
					<br />
					<Form.Control name='mood' as='select' onChange={handleChange}>
						<option>Happy</option>
						<option>Sad</option>
						<option>Moody</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='food'
						placeholder='Type of Food'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='img'
						placeholder='image link'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='description'
						placeholder='description'
						onChange={handleChange}
					/>
				</Form.Group>
				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					size='sm'
					block>
					Submit
				</Button>
				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					size='sm'
					block>
					Back to Mood
				</Button>
			</Form>
		</div>
	);
}

export default Footer;
