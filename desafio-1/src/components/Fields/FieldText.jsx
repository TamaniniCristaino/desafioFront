import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function FieldText(props){

	return (
		<React.Fragment>
			<TextField onChange={e => props.onChange(e.target.value)}
				{...props}
			/>
		</React.Fragment>
	);
}

FieldText.propTypes = {
	props: PropTypes.any,
	onChange: PropTypes.func
};