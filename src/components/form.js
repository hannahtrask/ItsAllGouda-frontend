import React from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
	return (
		<div className='form'>
			<h1>Add Mood Food</h1>
			<Form className='form'>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>How you Feelin'?</Form.Label>
					<br />
					<Form.Control as='select' className='mt-2'>
						<option>Happy</option>
						<option>Sad</option>
						<option>Moody</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='Type of Food' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='image link' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='description' />
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
