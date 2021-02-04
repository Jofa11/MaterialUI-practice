import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';

function App() {
	return (
		<div className='App'>
			<ButtonGroup variant='contained' color='primary'>
				<Button startIcon={<SaveIcon />} >
					Save
				</Button>
				<Button startIcon={<DeleteIcon />}  >
					Discard
				</Button>
			</ButtonGroup>
		</div>
	);
}

export default App;
