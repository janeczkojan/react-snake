import React, { Component } from 'react';
import styled from 'styled-components';
import ActionButton from './ActionButton';


const ContentStyle = styled.div`
	height: calc(100vh - 83px);
	padding: 12px;
`;


class Content extends Component {

	render() {
		return (
			<ContentStyle>
				<ActionButton text="New Game" />

				Content
			</ContentStyle>
		);
	}
}


export default Content;