import React, { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CheckboxExample() {
	const [checked, setChecked] = useState(true);
	return (
		<div>
			<FormControlLabel
      // when adding label, pass checkbox as a prop to formcontrollabel
				control={
					<Checkbox
            checked={checked}
            // when checked displays save icon, unchecked delete icon
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            // nice effect when clicking icon
						inputProps={{
							'aria-label': 'secondary checkbox',
						}}
					/>
				}
				label='Testing Checkbox'
			/>
		</div>
	);
}

function App() {
	return (
		<div className='App'>
			<CheckboxExample />
			<ButtonGroup variant='contained' color='primary'>
				<Button startIcon={<SaveIcon />}>Save</Button>
				<Button startIcon={<DeleteIcon />}>Discard</Button>
			</ButtonGroup>
		</div>
	);
}

export default App;
