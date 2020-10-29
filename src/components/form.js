import React, { useState } from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function CreateForm(props) {
	const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';
	const [redirect, setRedirect] = useState(false);

	const [state, setState] = useState({
		mood: '',
		author: '',
		name: '',
		course: '',
		img: '',
		description: '',
		foodId: props.match.params.id,
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(state);
		props.history.push('/');
	};

	return (
		<div className='form'>
			<h1 className='addmood'>Add Mood Food</h1>
			<Form onSubmit={handleSubmit} className='form'>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>How you Feelin'?</Form.Label>
					<br />
					<Form.Control name='mood' as='select' onChange={handleChange}>
						<option>Happy</option>
						<option>Blue</option>
						<option>Moody</option>
						<option>Sassy</option>
						<option>Mad</option>
						<option>Punchy</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='author'
						placeholder='Your name Here'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='name'
						placeholder='Name your Food'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control
						type='text'
						name='course'
						placeholder='Course?'
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
					{props.label}
				</Button>
				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					size='sm'
					block>
					<Link to='/'>Back to Mood</Link>
				</Button>
			</Form>
		</div>
	);
}

export default CreateForm;
