import React from 'react';
import '../scss/form.scss';
import Form from 'react-bootstrap/Form';

function Footer() {
	return (
		<>
			<h1>Add Mood Food</h1>
			<Form>
				<Form.Group controlId='exampleForm.ControlSelect1'>
					<Form.Label>How you Feelin'?</Form.Label>
					<br />
					<Form.Control as='select'>
						<option>Happy</option>
						<option>Sad</option>
						<option>Moody</option>
					</Form.Control>
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='name@example.com' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='name@example.com' />
				</Form.Group>
				<Form.Group controlId='exampleForm.ControlInput1'>
					<Form.Control type='email' placeholder='name@example.com' />
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
		</>
	);
}

export default Footer;
