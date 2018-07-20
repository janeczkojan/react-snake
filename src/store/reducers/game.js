const initState = {
	running: false,
	score: 0
};


const reducer = (state = initState, action) => {
	const { type, payload } = action;

	switch (type) {
		default:
			return state;
	}
};


export default reducer;