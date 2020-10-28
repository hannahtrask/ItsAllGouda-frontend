import React, { useState } from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';

function CreateForm(props) {
	const url = 'http://localhost:4000/gouda';
	// const url = 'https://its-all-gouda-backend.herokuapp.com/gouda';

	const [redirect, setRedirect] = useState(false);

	const [state, setState] = useState({
		mood: 'Happy',
		name: '',
		course: '',
		img: '',
		description: '',
	});

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		handleCreate();
	};

	const handleCreate = () => {
		fetch(url + '/moods/' + state.mood, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(state),
		}).then(() => setRedirect(true));
	};

	if (!redirect) {
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
						</Form.Control>
					</Form.Group>
					<Form.Group controlId='exampleForm.ControlInput1'>
						<Form.Control
							type='text'
							name='name'
							placeholder='Type of Food'
							onChange={handleChange}
						/>
					</Form.Group>
					<Form.Group controlId='exampleForm.ControlInput1'>
						<Form.Control
							type='text'
							name='course'
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
	} else {
		return <Redirect to='/' />;
	}
}

export default CreateForm;
