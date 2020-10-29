import React, { useState } from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CreateForm(props) {

	const [state, setState] = useState({
		mood: 'Happy',
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
					<Form.Label className="formsub">How you Feelin'?</Form.Label>
					<br />
					<br />
					<Form.Control name='mood' as='select' onChange={handleChange}>
						<option>Happy</option>
						<option>Blue</option>
						<option>Sassy</option>
						<option>Mad</option>
						<option>Punchy</option>
					</Form.Control>
					<br />
					<br />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control className="foodname"
						type='text'
						name='name'
						placeholder='Food Name'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control className="author"
						type='text'
						name='author'
						placeholder='Author'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control className="course"
						type='text'
						name='course'
						placeholder='Course'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control className="description"
						type='text'
						name='description'
						placeholder='Description'
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control className="imagelink"
						type='text'
						name='img'
						placeholder='Image Link'
						onChange={handleChange}
					/>
				</Form.Group>
				<br />
				<br />
				<Button
					className='mt-2'
					type='submit'
					variant='primary'
					size='sm'
					block>
					{props.label}
				</Button>
				<br />
				<br />
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
