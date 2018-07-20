import { combineReducers } from 'redux';
import appReducer from './app';
import gameReducer from './game';


const reducers = combineReducers({
	app: appReducer,
	game: gameReducer
});


export default reducers;