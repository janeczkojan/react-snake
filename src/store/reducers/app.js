import * as T from '../types/app';


const initState = {
	name: null,
	version: null,
	env: null,
	initialized: false
};


const reducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case T.CLEAR:
			return { ...initState };
		case T.SET_NAME:
			return { ...state, name: payload };
		case T.SET_VERSION:
			return { ...state, version: payload };
		case T.SET_ENV:
			return { ...state, env: payload };
		case T.SET_INITIALIZED:
			return { ...state, initialized: payload };
		default:
			return state;
	}
};


export default reducer;