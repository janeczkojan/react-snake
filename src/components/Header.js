import React, { Component } from 'react';
import { string } from 'prop-types';
import { header as headerTheme } from '../config/theme.json';
import styled from 'styled-components';
import Version from './Version';
import Brand from './Brand';


const HeaderStyle = styled.div`
	border: 1px solid black;
	position: relative;
	padding-top: ${headerTheme.paddingY};
	padding-right: ${headerTheme.paddingX};
	padding-bottom: calc(${headerTheme.paddingY} + (${headerTheme.versionFontSize} / 2));
	padding-left: ${headerTheme.paddingX};
	color: ${headerTheme.textColor};
	background-color: ${headerTheme.backgroundColor}

	.Version {
		position: absolute;
		bottom: calc(${headerTheme.versionFontSize} / 2);
		left: calc(${headerTheme.paddingX} + 1px);
		font-size: ${headerTheme.versionFontSize};
	}

	.Brand {

		h1 {
			font-size: ${headerTheme.brandFontSize};
		}
	}
`;


class Header extends Component {

	static propTypes = {
		env: string,
		app: string,
		version: string
	}


	render() {
		const { env, app, version } = this.props;

		return (
			<HeaderStyle>
				{!!env && !!version &&
					<Version 
						version={`${version} ${env}`} 
						className="Version" 
					/>
				}
				{!!app && 
					<Brand 
						app={app} 
						className="Brand"
					/>
				}
			</HeaderStyle>
		);
	}
}


export default Header;