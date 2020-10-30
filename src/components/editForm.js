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
		handleEdit();
	};

	const handleEdit = () => {
		fetch(url + '/foods/' + state.mood, {
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
				<Form onSubmit={handleSubmit} className='form'>
					<Form.Group controlId='exampleForm.ControlSelect1'>
						<Form.Label>Edit Your food!</Form.Label>
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
	} else {
		return <Redirect to='/edit' />;
	}
}

export default CreateForm;
