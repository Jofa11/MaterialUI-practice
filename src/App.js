import React, { useState } from 'react';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
	makeStyles,
	ThemeProvider,
	createMuiTheme,
} from '@material-ui/core/styles';

import { green, orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
	root: {
		background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
		border: 0,
		marginBottom: 15,
		borderRadius: 15,
		color: 'white',
		padding: '5px 30px',
	},
});

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[400],
    },
    secondary: {
      main: orange[400],
    }
	},
});

function ButtonStyled() {
	const classes = useStyles();
	return <Button className={classes.root}>Test Styled Button</Button>;
}

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
		<ThemeProvider theme={theme}>
			<div className='App'>
				<ButtonStyled />
				<TextField
					variant='outlined'
					color='secondary'
					// types ex: date, time, email
					type='email'
					label='Email'
					// can set value, placeholder only appears when focus on text field
					placeholder='test@test.com'
				/>
				<CheckboxExample />
				<ButtonGroup variant='contained' color='primary'>
					<Button startIcon={<SaveIcon />}>Save</Button>
					<Button startIcon={<DeleteIcon />}>Discard</Button>
				</ButtonGroup>
			</div>
		</ThemeProvider>
	);
}

export default App;
