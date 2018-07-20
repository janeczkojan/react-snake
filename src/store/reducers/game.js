import * as T from '../types/game';


const initState = {
	running: false,
	score: 0,
	startTime: null
};


const reducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case T.CLEAR:
			return { ...initState };
		default:
			return state;
	}
};


export default reducer;