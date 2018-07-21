import React from 'react';
import { string } from 'prop-types';


const ActionButton = ({ text }) => (
	<button type="button">
		{text}
	</button>
);

ActionButton.propTypes = {
	text: string.isRequired
};


export default ActionButton;