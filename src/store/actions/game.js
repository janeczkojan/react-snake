import * as T from '../types/game';


export const clear = () => ({
	type: T.CLEAR
});


export const setRunning = (running = false) => ({
	type: T.SET_RUNNING,
	payload: running === true
});


export const setScore = (score = 0) => ({
	type: T.SET_SCORE,
	payload: parseInt(score, 10)
});


export const setStartTime = (time = null) => ({
	type: T.SET_START_TIME,
	payload: time
});


export const setEndTime = (time = null) => ({
	type: T.SET_END_TIME,
	payload: time
});


export const start = () => ({
	type: T.START
});


export const stop = () => ({
	type: T.STOP
});