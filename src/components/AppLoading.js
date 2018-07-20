import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';


const AppLoadingStyle = styled.div`
	text-align: center;

	${(props) => {
		if (!props.visible) {
			return `
				visibility: hidden;
				display: none;
			`;
		}

		return '';
	}}
`;

AppLoadingStyle.propTypes = {
	visible: bool.isRequired
};


const AppLoading = ({ visible }) => (
	<AppLoadingStyle visible={visible}>
		<h2>Loading...</h2>
	</AppLoadingStyle>
);

AppLoading.propTypes = {
	visible: bool.isRequired
};

AppLoading.defaultProps = {
	visible: true
};


export default AppLoading;