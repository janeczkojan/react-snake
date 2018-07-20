import { injectGlobal } from 'styled-components';
import { global as globalTheme } from '../config/theme.json';


injectGlobal`
	*, html, body {
		padding: 0;
		margin: auto;
		font-family: ${globalTheme.fontFamily};
	}
`;