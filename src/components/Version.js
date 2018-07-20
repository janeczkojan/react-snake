import React from 'react';
import { string } from 'prop-types';


const Version = ({ className, version }) => (
	<div className={className}>
		{version}
	</div>
);


Version.propTypes = {
	className: string,
	version: string.isRequired
};


export default Version;