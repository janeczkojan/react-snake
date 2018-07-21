import * as T from '../types/game';


const initState = {
	running: false,
	score: 0,
	startTime: null,
	endTime: null
};


const reducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		case T.CLEAR:
			return { ...initState };
		case T.SET_RUNNING:
			return { ...state, running: payload };
		case T.SET_SCORE:
			return { ...state, score: payload };
		case T.SET_START_TIME:
			return { ...state, startTime: payload };
		case T.SET_END_TIME:
			return { ...state, endTime: payload };
		default:
			return state;
	}
};


export default reducer;