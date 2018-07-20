import React from 'react';
import { string } from 'prop-types';


const Brand = ({ className, app }) => (
	<div className={className}>
		<h1>{app}</h1>
	</div>
);

Brand.propTypes = {
	className: string,
	app: string.isRequired
};


export default Brand;